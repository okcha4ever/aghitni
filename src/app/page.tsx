import useCheckUser from "@/hooks/useCheckUser";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  const userId: string | undefined = user?.id;

  const data = await useCheckUser(userId);
  if (data?.role !== "send") {
    redirect("/need-help");
  } else {
    redirect("/send-help");
  }

  return (
    <main className="flex flex-col items-center justify-center pt-10 text-xl text-black">
      hello
    </main>
  );
}
