import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const ChatHeader = ({ image, name }: { image?: string; name: string }) => {
  return (
    <header className="font-medium bg-background py-6 px-4 sticky top-0 z-10 border-b flex flex-row items-center justify-between">
      {image && <Image width={30} height={30} alt="dp" src={image} />}
      {name}
      <div className="flex flex-row gap-2 items-center">
        <ModeToggle />
        <Button asChild>
          <SignOutButton />
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
