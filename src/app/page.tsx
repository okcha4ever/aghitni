"use client";
import SignedIn from "@/components/Fetchers/users/SignedIn";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HomePage() {
  // const user = await currentUser();

  // const userId: string | undefined = user?.id;

  const { data: session } = useSession();

  // console.log(session?.user.id);

  const { user: data, isLoading } = SignedIn(session?.user.id);
  if (!isLoading) {
    console.log(data);
  }
  if (data?.role !== "send" && !isLoading) {
    redirect("/need-help");
  } else {
    console.log(data?.role);
    redirect("/send-help");
  }

  return (
    <main className="flex flex-col items-center justify-center pt-10 text-xl text-black">
      {session?.user.id}
    </main>
  );
}
