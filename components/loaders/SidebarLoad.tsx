import { Skeleton } from "../ui/skeleton";

const SidebarLoad = () => {
  return (
    <section className="hidden sm:block sm:w-64 md:w-72 h-screen fixed top-0 left-0 z-10 transition-all border-r">
      <h1 className="text-2xl font-medium py-6 px-3">Chat app</h1>
      <div className="flex flex-col gap-0 w-full h-[calc(100%-5.1rem)] overflow-y-auto pl-1 custom_scrollbar">
        <div className="pl-2 py-2 flex flex-row gap-3 items-center">
          <div className="w-12 aspect-square rounded-full bg-primary" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
        <div className="pl-2 py-2 flex flex-row gap-3 items-center">
          <div className="w-12 aspect-square rounded-full bg-primary" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
        <div className="pl-2 py-2 flex flex-row gap-3 items-center">
          <div className="w-12 aspect-square rounded-full bg-primary" />
          <div>
            <Skeleton className="h-[1rem] w-30" />
            <Skeleton className="h-[0.7rem] w-40 mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarLoad;
