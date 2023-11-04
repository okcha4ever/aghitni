'use client'
import React from "react";
import AghitniLogo from "./AghitniLogo";
import Link from "next/link";
import {usePathname} from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <center className="w-full">
      <section className="container flex w-full flex-col items-center justify-center gap-5 pt-6">
        <div>
          <AghitniLogo width={120} className={"float-right flex justify-end"} />
        </div>
        <div className="flex justify-between rounded-full bg-gray-300 sm:w-80 sm:px-3 sm:py-2  ">
          <Link href="/need-help">
            <button className="rounded-full bg-green-700 px-7 py-2 sm:px-5 sm:py-2">
              Need Help
            </button>
          </Link>
          <Link href="/send-help">
            <button className="rounded-full px-7 py-2 hover:bg-green-200 sm:px-5 sm:py-2">
              Send Help
            </button>
          </Link>
        </div>
      </section>
    </center>
  );
};

export default Header;
