import { UserButton } from "@clerk/nextjs";
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-10 text-white">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
