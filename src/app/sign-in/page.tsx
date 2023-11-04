import { simple } from "@/helpers/ClerkAppearance";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center bg-white w-full ">
      <SignIn appearance={simple as any} />
    </main>
  );
}
