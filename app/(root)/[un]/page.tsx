import ChatHeader from "@/components/shared/ChatHeader";

const ChatPage = ({ params }: { params: { un: string } }) => {
  return (
    <>
      <ChatHeader name={params.un} />
      <main className="w-full min-h-[200vh] py-6 flex flex-col gap-6">
        <p className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas
          excepturi provident cum eligendi culpa ipsam corporis sequi labore at
          placeat recusandae dignissimos praesentium voluptates, aspernatur,
          asperiores reprehenderit ducimus? Deserunt.
        </p>

        <p className="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          neque unde voluptatem placeat impedit necessitatibus nihil sit
          excepturi aperiam earum laboriosam maxime similique quaerat aut labore
          veritatis est, eius blanditiis.
        </p>
        <p className="right">Hello</p>
      </main>
    </>
  );
};

export default ChatPage;
