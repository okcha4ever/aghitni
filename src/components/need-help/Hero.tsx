import React from "react";
import AghitniLogo from "../AghitniLogo";

const Hero = () => {
  return (
    <section className="flex justify-end pe-10 pt-10 sm:px-52">
      <div className=" h-fit w-fit">
        <AghitniLogo className="bg-blend-screen" width={150} />
      </div>
    </section>
  );
};

export default Hero;
