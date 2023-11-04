"use client";
import { useSession } from "next-auth/react";

import SignedIn from "./Fetchers/users/SignedIn";
import { redirect } from "next/navigation";

const SendHelp = () => {
  const { data: session } = useSession();
  const { user: data, isLoading } = SignedIn(session?.user.id);
  if (!isLoading) {
    if (data?.role !== "send") {
      redirect("/need-help");
    }
  }
  return (
    <section className="container m-3 mx-auto flex-col items-center justify-between">
      <main className="flex flex-col items-center justify-center sm:mt-5 lg:mt-10">
        <div className="mt-15 flex flex-wrap items-center justify-center gap-6 p-10 sm:mx-5">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-fit space-y-5 rounded-lg bg-gray-300 p-5 px-5 text-center font-bold shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-1/2 sm:px-5 md:w-1/3 lg:w-1/4"
            >
              <p className="flex flex-row items-center justify-center  text-green-700">
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
                7533 street AlQueds.
              </p>

              <h1 className="text-2xl text-black">
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

              <p className="flex w-full justify-end text-left text-sm font-light">
                Date: 11/23/2020
              </p>
            </div>
          ))}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative w-fit space-y-5 rounded-lg bg-gray-300 p-5 px-5 text-center font-bold shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-1/2 sm:px-5 md:w-1/3 lg:w-1/4"
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
              <div className="space-y-5 opacity-20">
                <p className="flex flex-row items-center justify-center  text-green-700">
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
                  7533 street AlQueds.
                </p>
                <h1 className="text-2xl text-black">
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

                <p className="flex w-full justify-end text-left text-sm font-light  ">
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
