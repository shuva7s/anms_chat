"use server";

import { currentUser } from "@clerk/nextjs/server";

export async function userInfo() {
  try {
    const user = await currentUser();
    if (user) {
      return {
        userId: user.id!,
        userName: user.username!,
        userImage: user.imageUrl!,
        userMail: user.emailAddresses[0].emailAddress!,
        firstName: user.firstName ? user.firstName : "",
        lastName: user.lastName ? user.lastName : "",
      };
    } else {
      return {
        userId: null,
        userName: null,
        userImage: null,
        userMail: null,
        firstName: null,
        lastName: null,
      };
    }
  } catch (error: any) {
    return {
      userId: null,
      userName: null,
      userImage: null,
      userMail: null,
      firstName: null,
      lastName: null,
    };
  }
}
