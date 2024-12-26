import { Loader2 } from "lucide-react";

const ChatPageLoadForPc = () => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Loader2 className="animate-spin w-8 h-8 text-primary" />
    </main>
  );
};

export default ChatPageLoadForPc;
