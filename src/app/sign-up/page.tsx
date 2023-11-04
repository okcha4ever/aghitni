// Sign in page
import AghitniLogo from "@/components/AghitniLogo";
import { simple } from "@/helpers/ClerkAppearance";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center sm:flex-row sm:space-x-20">
        <AghitniLogo width={120} />
        <div className="h-screen pt-10">
          <SignUp appearance={simple as any} />
        </div>
      </main>
    </div>
  );
}
