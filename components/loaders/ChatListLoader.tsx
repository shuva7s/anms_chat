import { Skeleton } from "../ui/skeleton";

const ChatListLoader = () => {
  return (
    <section className="sm:hidden">
      <h1 className="text-2xl font-medium py-6 px-4">Chat app</h1>
      <div className="flex flex-col gap-0 w-full px-4 min-h-screen mt-4">
        <div className="py-3 border-b flex flex-row gap-3 items-center">
          <div className="w-14 aspect-square rounded-full bg-accent" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
        <div className="py-3 border-b flex flex-row gap-3 items-center">
          <div className="w-14 aspect-square rounded-full bg-accent" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
        <div className="py-3 border-b flex flex-row gap-3 items-center">
          <div className="w-14 aspect-square rounded-full bg-accent" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatListLoader;
