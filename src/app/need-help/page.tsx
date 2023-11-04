import OtherInput from "@/components/need-help/OtherInput";
import Services from "@/components/need-help/Services";

const page = () => {
  return (
    <main className="flex flex-col">
      {/* <Hero /> */}

      <div className="flex items-center justify-center">
        <hr className="my-8 h-px w-1/2 border-0 bg-gray-200 dark:bg-gray-700 sm:float-none" />
      </div>
      <div className="relative">
        <Services />
        <OtherInput />
      </div>
    </main>
  );
};

export default page;
