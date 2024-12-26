import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";

const ChatHeader = ({ image, name }: { image?: string; name: string }) => {
  return (
    <header className="font-medium bg-background py-6 px-4 sticky top-0 z-10 border-b flex flex-row items-center justify-between">
      {image && <Image width={30} height={30} alt="dp" src={image} />}
      {name}
      <ModeToggle />
    </header>
  );
};

export default ChatHeader;
