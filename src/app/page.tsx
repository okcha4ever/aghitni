import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const checkUser = async (userId: string | null | undefined) => {
  let response = await fetch(
    `http://localhost:3000/api/users/signed-in?userId=${userId}`,
  );
  let data = await response.json();
  return data;
  // return data;
};

export default async function HomePage() {
  // todo: make user choose a role
  const user = await currentUser();

  const userId: string | undefined = user?.id;

  let data = await checkUser(userId);
  if (data?.role !== "send") {
    redirect("/need-help");
  } else {
    redirect("/send-help");
  }

  return (
    <main className="flex flex-col items-center justify-center pt-10 text-xl text-black"></main>
  );
}
