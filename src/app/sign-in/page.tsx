// Sign in page
import AghitniLogo from "@/components/AghitniLogo";
import SignIn from "@/components/sign-in/SignIn";
import { simple } from "@/helpers/ClerkAppearance";

export default function Page() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center sm:flex-row sm:space-x-20">
        <AghitniLogo width={120} />
        <div className="h-screen pt-10">
          <SignIn />
        </div>
      </main>
    </div>
  );
}
