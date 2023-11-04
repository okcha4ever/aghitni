// Sign in page
import AghitniLogo from "@/components/AghitniLogo";
import { simple } from "@/helpers/ClerkAppearance";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div id="Sign_in">
    <main className="flex items-center justify-center sm:flex-row flex-col sm:space-x-20">
      <AghitniLogo width={120} />
      <div className="pt-10">
      <SignIn appearance={simple as any} />
      </div>
    </main>
    </div>
  );
}