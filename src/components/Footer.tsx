"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`absolute bottom-0 mb-2 flex w-full items-center justify-center `}
    >
      <div
        className={`${
          pathname.includes("sign-up") || pathname.includes("sign-in")
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
