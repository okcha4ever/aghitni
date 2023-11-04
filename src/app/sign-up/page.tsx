import { simple } from "@/helpers/ClerkAppearance";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center bg-white  pt-10">
      <SignUp appearance={simple as any} />
    </main>
  );
}
