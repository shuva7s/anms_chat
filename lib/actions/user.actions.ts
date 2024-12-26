import ChatRoom, { memberType } from "../database/models/chat.model";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";

export type userDataProp = {
  userId: string;
  userName: string;
  userMail: string;
  firstName: string;
  lastName: string;
  userImage: string;
};
export async function handleUserAndGetChatRooms(userData: userDataProp) {
  try {
    await connectToDatabase();

    // Check if the user already exists
    let user = await User.findOne({
      clerk_id: userData.userId,
      username: userData.userName,
      email: userData.userMail,
    });

    // If user does not exist, create them
    if (!user) {
      user = await User.create({
        clerk_id: userData.userId,
        username: userData.userName,
        email: userData.userMail,
        first_name: userData.firstName,
        last_name: userData.lastName,
        photo: userData.userImage,
        chatRooms: [],
        invitations: [],
      });
    }

    // Fetch user's chat rooms with required data transformation
    const chatRooms = await ChatRoom.find({
      _id: { $in: user.chatRooms },
    })
      .populate("membersWithTheirInfo.userId", "username")
      .lean();

    // Transform the chat rooms to return appropriate data
    const transformedChatRooms = chatRooms.map((room) => {
      const name = room.isGroupChat
        ? room.groupName
        : room.membersWithTheirInfo.find(
            (member: memberType) =>
              member.userId.toString() !== user._id.toString()
          )?.userId?.username || "Unknown User";

      return {
        chatRoomId: room._id,
        name,
      };
    });

    return transformedChatRooms;
  } catch (error) {
    console.error("Error handling user and fetching chat rooms:", error);
    throw error;
  }
}
