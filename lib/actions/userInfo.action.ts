"use server";

import { currentUser } from "@clerk/nextjs/server";

export async function userInfo() {
  try {
    const user = await currentUser();
    if (user) {
      return {
        userId: user.id,
        userName: user.username,
        userImage: user.imageUrl,
        userMail: user.emailAddresses[0].emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    } else {
      return {
        userId: undefined,
        userName: undefined,
        userImage: undefined,
        userMail: undefined,
        firstName: undefined,
        lastName: undefined,
      };
    }
  } catch (error: any) {
    return {
      userId: undefined,
      userName: undefined,
      userImage: undefined,
      userMail: undefined,
      firstName: undefined,
      lastName: undefined,
    };
  }
}
