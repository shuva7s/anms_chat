import ChatListLoader from "@/components/loaders/ChatListLoader";
import ChatHeader from "@/components/shared/ChatHeader";
import { handleUserAndGetChatRooms } from "@/lib/actions/user.actions";
import { userInfo } from "@/lib/actions/userInfo.action";
import Link from "next/link";
import { Suspense } from "react";

async function ChatList() {
  const { userId, userName, userMail, firstName, lastName, userImage } =
    await userInfo();

  if (
    !userId ||
    !userName ||
    !userMail ||
    !firstName ||
    !lastName ||
    !userImage
  ) {
    return <div>Recived invalid user info</div>;
  } else {
    const chatRooms = await handleUserAndGetChatRooms({
      userId,
      userName,
      userMail,
      firstName,
      lastName,
      userImage,
    });

    return (
      <section className="sm:hidden">
        <h1 className="text-2xl font-medium py-6 px-4">Chat app</h1>
        <div className="flex flex-col gap-0 w-full px-4 min-h-screen mt-4">
          {chatRooms.length > 0 ? (
            chatRooms.map((chatRoom) => <div>{chatRoom.name}</div>)
          ) : (
            // <p>You have no chat</p>
            <></>
          )}
          <Link
            href={"/random1"}
            className="py-3 border-b flex flex-row gap-3 items-center"
          >
            <div className="w-14 aspect-square rounded-full bg-accent" />
            <div>
              <p>Random 1</p>
              <p className="text-sm text-muted-foreground">lorem ipsum hello</p>
            </div>
          </Link>
          <Link
            href={"/random2"}
            className="py-3 border-b flex flex-row gap-3 items-center"
          >
            <div className="w-14 aspect-square rounded-full bg-accent" />
            <div>
              <p>Random 2</p>
              <p className="text-sm text-muted-foreground">lorem ipsum hello</p>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

export default function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <ChatHeader name="Select a chat" />
      </div>
      <main>
        <div className="hidden sm:flex w-full min-h-screen justify-center items-center">
          <p className="text-muted-foreground text-xl">Selet a chat</p>
        </div>
        <Suspense fallback={<ChatListLoader />}>
          <ChatList />
        </Suspense>
      </main>
    </>
  );
}
