import React from "react";
import Image from "next/image";
const SendHelp = () => {
  return (
    <section className="container m-3 mx-auto flex-col items-center justify-between">
      <header className="container mx-auto flex flex-col items-center justify-center bg-black ">
        <Image
          className=" w-32"
          src="/20231102_222513.png"
          width={200}
          height={100}
          alt="Aghitni Logo"
        />
      </header>
      <main className="flex flex-col justify-center items-center lg:mt-10 sm:mt-5">
        <h1 className="font-extrabold text-2xl">Choose Your State</h1>
        <div className="flex justify-between rounded-full bg-gray-300 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] sm:w-96 sm:px-10 sm:py-2">
          <button className="rounded-full bg-green-700 px-7 py-2 sm:px-5 sm:py-2">
            Need Help
          </button>
          <button className="hover-bg-green-200 rounded-full px-7 py-2 sm:px-5 sm:py-2">
            Send Help
          </button>
        </div>
        <div className="mt-15 flex flex-wrap items-center justify-center gap-6 p-10 sm:mx-5">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-fit rounded-lg bg-gray-300 p-5 px-5 text-center font-bold shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-1/2 sm:px-5 md:w-1/3 lg:w-1/4"
            >
              <h1 className=" inli text-2xl text-black">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 self-center text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                Needs: supllies, medicines, blankets
              </h1>

              <br />
              <p className="text-left text-green-700">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Location: 7533 street AlQueds.
              </p>
              <button className="m-5 rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 ">
                Help
              </button>
              <p className="text-left text-center text-sm font-light">
                Date: 11/23/2020
              </p>
            </div>
          ))}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative w-fit rounded-lg bg-gray-300 p-5 px-5 text-center font-bold  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-1/2 sm:px-5 md:w-1/3 lg:w-1/4"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute inset-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform text-green-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="opacity-20">
                <h1 className="inli text-2xl text-black">
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-10 w-10 self-center text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  Needs: supplies, medicines, blankets
                </h1>
                <br />
                <p className="text-left text-green-700">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Location: 7533 street AlQueds.
                </p>
                <button
                  className="m-5 rounded-full bg-red-500 px-4 py-2 font-bold text-white  "
                  disabled={true}
                >
                  Help
                </button>
                <p className="text-left text-center text-sm font-light">
                  Date: 11/23/2020
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default SendHelp;
