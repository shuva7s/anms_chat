import CreateRoom from "@/components/shared/CreateRoom";
import { headers } from "next/headers";

export default function Home() {
  // const ip = headers().get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
  // console.log("IP ADDRESS->", ip);
  const headersList = headers();
  console.dir(headersList);
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
  const userAgent = headersList.get("user-agent") || "unknown";
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <p>
          {ip}_{userAgent}
        </p>
        <CreateRoom host_ip={ip} />
      </div>
    </main>
  );
}
