import React from "react";
import AghitniLogo from "./AghitniLogo";

const Header = () => {
  return (
    <center className="w-full">
      <section className="container flex w-full flex-row-reverse items-center justify-center gap-5 pt-6">
        <div>
          <AghitniLogo width={120} className={"float-right flex justify-end"} />
        </div>
        <div className="flex justify-between rounded-full bg-gray-300 sm:w-80 sm:px-3 sm:py-2  ">
          <button className="rounded-full bg-green-700 px-7 py-2 sm:px-5 sm:py-2">
            Need Help
          </button>
          <button className="rounded-full px-7 py-2 hover:bg-green-200 sm:px-5 sm:py-2">
            Send Help
          </button>
        </div>
      </section>
    </center>
  );
};

export default Header;
