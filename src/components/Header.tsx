"use client";
// import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AghitniLogo from "./AghitniLogo";
import SignedIn from "./Fetchers/users/SignedIn";
import { useSession } from "next-auth/react";
const Header = () => {
  const pathname = usePathname();

  // --- Get userId
  const { data: session } = useSession();
  const { user: data, isLoading } = SignedIn(session?.user.id);
  // -- Get Role
  const role = !isLoading && data?.role;
  // ---

  const showHeaderWhen =
    pathname.includes("/need-help") || pathname.includes("/send-help");

  const focusButton =
    "rounded-full bg-green-700 px-7 ease-in-out duration-500 py-2 sm:px-5 sm:py-2";

  const inFocusButton =
    "rounded-full px-7 py-2 hover:bg-green-200 ease-in-out duration-200 sm:px-5 sm:py-2";

  return (
    <center className={`w-full ${!showHeaderWhen ? "hidden" : null}`}>
      <section className="container flex w-full flex-col items-center justify-center pt-6">
        <div>
          <AghitniLogo width={120} className={"float-right flex justify-end"} />
        </div>
        <div
          className={`flex justify-between rounded-full bg-gray-300 sm:px-3 sm:py-2  `}
        >
          <Link href="/need-help">
            <button
              className={
                pathname.includes("/need-help") ? focusButton : inFocusButton
              }
            >
              Need Help
            </button>
          </Link>
          <Link
            href="/send-help"
            className={`${role !== "send" && role === null ? "hidden" : null}`}
          >
            <button
              className={
                pathname.includes("/send-help") ? focusButton : inFocusButton
              }
            >
              Send Help
            </button>
          </Link>
        </div>
      </section>
    </center>
  );
};

export default Header;
