<<<<<<< HEAD
import { UserButton } from "@clerk/nextjs";
=======
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
>>>>>>> main/testBranch2

// ? http://localhost:3000/
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-10 text-white">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
