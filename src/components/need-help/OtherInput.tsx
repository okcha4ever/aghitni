const OtherInput = () => {
  return (
    <section className="relative flex items-center justify-center px-5 pb-10">
      <div className="container flex max-w-[600px] flex-col space-y-3 rounded-lg bg-gray-200 px-5 py-5">
        <span className="text-2xl text-black">Other</span>
        <textarea
          className="h-[120px] max-h-[200px] rounded-l-md border-l-4 border-gray-500 bg-transparent px-5 pt-3 text-left"
          placeholder="What do you Need"
        ></textarea>
      </div>
    </section>
  );
};

export default OtherInput;
