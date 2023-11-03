import React from "react";
import Image from "next/image";
const SendHelp = () => {
  return (
    <section className="container m-3 mx-auto flex-col items-center justify-between">
      <header className="container mx-auto flex items-center justify-center pt-6 sm:flex ">
        <nav className="absolute right-3 h-16 w-16">
          <Image
            className="bg-black"
            src="/20231102_222513.png"
            width={100}
            height={100}
            alt="Aghitni Logo"
          />
        </nav>
        <div className="flex justify-between rounded-full bg-gray-300 sm:w-96 sm:px-10 sm:py-2  ">
          <button className="rounded-full bg-green-700 px-7 py-2 sm:px-5 sm:py-2">
            Need Help
          </button>
          <button className="rounded-full px-7 py-2 hover:bg-green-200 sm:px-5 sm:py-2">
            Send Help
          </button>
        </div>
      </header>

      <main className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:mx-5">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div
            key={index}
            className="w-fit rounded-lg bg-gray-300 p-7 px-10 text-center font-bold sm:w-1/2 sm:px-5 md:w-1/3 lg:w-1/4"
          >
            <h1>
              hello world
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                vitae!
              </p>
            </h1>
          </div>
        ))}
      </main>
    </section>
  );
};

export default SendHelp;
