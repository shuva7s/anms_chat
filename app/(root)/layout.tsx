import SidebarLoad from "@/components/loaders/SidebarLoad";
import { Button } from "@/components/ui/button";
import { handleUserAndGetChatRooms } from "@/lib/actions/user.actions";
import { userInfo } from "@/lib/actions/userInfo.action";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

async function ChatRooms() {
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
      <section className="hidden sm:block sm:w-64 md:w-72 h-screen fixed top-0 left-0 z-10 transition-all border-r">
        <h1 className="text-2xl font-medium py-6 px-3">Chat app</h1>
        <div className="flex flex-col gap-0 w-full h-[calc(100%-5.1rem)] overflow-y-auto pl-1 custom_scrollbar">
          {chatRooms.length > 0 ? (
            chatRooms.map((chatRoom) => <div>{chatRoom.name}</div>)
          ) : (
            // <p>You have no chat</p>
            <></>
          )}
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SignedIn>
        <Suspense fallback={<SidebarLoad />}>
          <ChatRooms />
        </Suspense>
        <div className="sm:ml-64 md:ml-72 flex-col">{children}</div>
      </SignedIn>
      <SignedOut>
        <main className="w-full min-h-screen flex justify-center items-center">
          <Button asChild>
            <SignInButton />
          </Button>
        </main>
      </SignedOut>
    </div>
  );
}
