import ChatListLoader from "@/components/loaders/ChatListLoader";
import ChatHeader from "@/components/shared/ChatHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUser, getChatRooms } from "@/lib/actions/user.actions";
import { userInfo } from "@/lib/actions/userInfo.action";
import { SignedIn } from "@clerk/nextjs";
import { BellDot, Settings, Search, UserPlus2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function ChatList({
  userId,
  userName,
  userMail,
}: {
  userId: string;
  userName: string;
  userMail: string;
}) {
  const chatRooms = await getChatRooms({ userId, userName, userMail });
  return (
    <section className="sm:hidden">
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center px-4">
        <h1 className="text-2xl font-medium py-6">Chat app</h1>
        <div className="flex flex-row gap-1">
          <Button className="rounded-full bg-transparent" size="icon">
            <BellDot className="scale-[1.35]" />
          </Button>
          <Button className="rounded-full bg-transparent" size="icon">
            <Settings className="scale-[1.35]" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-0 w-full px-4 min-h-screen">
        <div className="flex flex-row gap-2 mb-4 mt-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 w-4 top-1/2 text-muted-foreground -translate-y-1/2" />
            <Input className="w-full pl-9 rounded-full" placeholder="Search" />
          </div>

          <Button className="rounded-full bg-transparent" size="icon">
            <UserPlus2 />
          </Button>
        </div>

        {/* {chatRooms.length > 0 ? (
          chatRooms.map((chatRoom) => <div>{chatRoom.name}</div>)
        ) : (
          <p>You have no chat</p>
          <></>
        )} */}
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

export default async function Home() {
  const { userId, userName, userMail, firstName, lastName, userImage } =
    await userInfo();

  if (!userId || !userName || !userMail) {
    return (
      <div>
        <p>Invalid user</p>
      </div>
    );
  }

  const { success, message, user } = await createUser({
    userId,
    userName,
    userMail,
    firstName,
    lastName,
    userImage,
  });

  if (!success) {
    return (
      <SignedIn>
        <main className="w-full min-h-screen flex justify-center items-center">
          <p>{message}</p>
        </main>
      </SignedIn>
    );
  }

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
          <ChatList
            userId={user.clerk_id}
            userName={user.username}
            userMail={user.email}
          />
        </Suspense>
      </main>
    </>
  );
}
