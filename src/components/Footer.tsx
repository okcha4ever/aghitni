"use client";
// import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignedIn from "./Fetchers/users/SignedIn";
import { signIn, useSession } from "next-auth/react";

const Footer = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { user: data, isLoading } = SignedIn(session?.user.id);
  const role = !isLoading && data ? data.role : "none";

  return (
    <footer
      className={`absolute bottom-0 mb-2 flex w-full items-center justify-center ${
        pathname.includes("sign-up") || pathname.includes("sign-in")
          ? "hidden"
          : null
      }`}
    >
      <div className=" flex flex-row space-x-1">
        <span>Work with the Palestinian government?</span>
        <button
          onClick={() => void signIn("google")}
          className={`${role === "send" ? "hidden" : null} text-blue-500`}
        >
          Sign-up
        </button>
        <Link
          href="mailto:aminekhiari72@gmail.com"
          className={`${role !== "send" ? "hidden" : "block"} text-blue-500`}
        >
          Contact us
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
