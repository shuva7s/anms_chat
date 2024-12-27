import SidebarLoad from "@/components/loaders/SidebarLoad";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUser, getChatRooms } from "@/lib/actions/user.actions";
import { userInfo } from "@/lib/actions/userInfo.action";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Search, BellDot, UserPlus2, Settings } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function ChatRooms({
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
    <section className="hidden sm:block sm:w-64 md:w-72 h-screen fixed top-0 left-0 z-10 transition-all border-r">
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center px-3">
        <h1 className="text-2xl font-medium py-6">Chat app</h1>
        <div className="flex flex-row gap-1">
          <Button
            className="rounded-full bg-transparent text-muted-foreground hover:text-foreground"
            size="icon"
          >
            <BellDot className="scale-[1.35]" />
          </Button>
          <Button
            className="rounded-full bg-transparent text-muted-foreground hover:text-foreground"
            size="icon"
          >
            <Settings className="scale-[1.35]" />
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-1 my-4 px-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 w-4 top-1/2 text-muted-foreground -translate-y-1/2" />
          <Input className="w-full pl-9 rounded-full" placeholder="Search" />
        </div>

        <Button className="rounded-full bg-transparent" size="icon">
          <UserPlus2 />
        </Button>
      </div>
      <div className="flex flex-col gap-0 w-full h-[calc(100%-5.1rem)] overflow-y-auto pl-1 custom_scrollbar">
        {/* {chatRooms.length > 0 ? (
          chatRooms.map((chatRoom) => <div>{chatRoom.name}</div>)
        ) : (
          <p>You have no chat</p>
          <></>
        )} */}
        <Link
          href={"/random1"}
          className="pl-2 py-2 flex flex-row gap-3 items-center"
        >
          <div className="w-12 aspect-square rounded-full bg-primary" />
          <div>
            <p className="text-sm">Random 1</p>
            <p className="text-xs text-muted-foreground">lorem ipsum hello</p>
          </div>
        </Link>
        <Link
          href={"/random2"}
          className="pl-2 py-2 bg-accent/50 rounded-l-2xl flex flex-row gap-3 items-center"
        >
          <div className="w-12 aspect-square rounded-full bg-primary" />
          <div>
            <p className="text-sm">Random 2</p>
            <p className="text-xs text-muted-foreground">lorem ipsum hello</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId, userName, userMail, firstName, lastName, userImage } =
    await userInfo();

  if (!userId || !userName || !userMail) {
    return (
      <SignedOut>
        <main className="w-full min-h-screen flex justify-center items-center">
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </main>
      </SignedOut>
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
      <>
        <SignedIn>
          <p>{message}</p>
        </SignedIn>
      </>
    );
  }

  return (
    <div>
      <SignedIn>
        <Suspense fallback={<SidebarLoad />}>
          <ChatRooms
            userId={user.clerk_id}
            userName={user.username}
            userMail={user.email}
          />
        </Suspense>
        <div className="sm:ml-64 md:ml-72 flex-col">{children}</div>
      </SignedIn>
    </div>
  );
}
