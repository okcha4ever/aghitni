import Hero from "@/components/need-help/Hero";
import OtherInput from "@/components/need-help/OtherInput";
import Services from "@/components/need-help/Services";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col">
      <Hero />

      <div className="flex justify-end pe-10 sm:justify-center sm:px-0">
        <hr className=" my-8 h-px w-1/2 border-0 bg-gray-200 dark:bg-gray-700 sm:float-none" />
      </div>
      <div className="relative">
        <Services />
        <OtherInput />
      </div>
    </main>
  );
};

export default page;
