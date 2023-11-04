import React from "react";

const OtherInput = () => {
  return (
    <section className="flex items-center justify-center pt-10">
      <div className="flex flex-col space-y-3 rounded-lg bg-gray-200 px-5 py-5">
        <span className="text-2xl text-black">Other</span>
        <textarea
          className="h-[120px] max-h-[200px] w-[560px] rounded-sm border-l-2 border-gray-500 bg-transparent px-5 text-left focus:border-none"
          placeholder="What do you Need"
        ></textarea>
      </div>
    </section>
  );
};

export default OtherInput;
