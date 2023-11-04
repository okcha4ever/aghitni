"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignedIn from "./Fetchers/users/SignedIn";

const Footer = () => {
  const pathname = usePathname();
  const { user: clerkUser, isLoaded } = useUser();

  const { user, isLoading } = SignedIn(clerkUser?.id);
  const role = !isLoading && isLoaded && user ? user.role : "none";

  return (
    <footer className="absolute bottom-0 mb-2 flex w-full items-center justify-center">
      <div
        className={`${
          pathname.includes("sign-up") ||
          pathname.includes("sign-in") ||
          role === "send"
            ? "hidden"
            : null
        } space-x-1`}
      >
        <span>Work with the Palestinian government?</span>
        <Link href="/sign-up" className="text-blue-500">
          Sign-up
        </Link>
      </div>
      <Link
        href="/"
        className={`${
          !pathname.includes("sign-up") || !pathname.includes("sign-in")
            ? "hidden"
            : null
        } text-blue-500`}
      >
        {"<-"} Go home
      </Link>
    </footer>
  );
};

export default Footer;
