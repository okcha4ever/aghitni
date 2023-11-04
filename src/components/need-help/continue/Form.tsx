const Form = () => {
  const inputs = [
    {
      label: "Full Name",
      placeholder: "Ahmed",
    },
    {
      label: "Phone Number",
      placeholder: "(+1) 23456789",
    },
    {
      label: "Location",
      placeholder: "Gaza in-front of mosque",
    },
  ];
  return (
    <section className="flex items-center justify-center">
      <form
        action="/need-help"
        className="h-auto w-auto space-y-5 rounded-md bg-[#D9D9D9] px-10 py-10"
      >
        <p className="text-xl font-bold">
          Please fill these information carefully
        </p>
        {inputs.map((input, idx) => (
          <div
            key={`${input.label}-${idx}`}
            className="flex flex-col space-y-1"
          >
            <label htmlFor={input.label} className="text-lg">
              {input.label}:
            </label>
            <input
              placeholder={`e.g: ${input.placeholder}`}
              className="rounded-lg border border-gray-500 bg-[#D9D9D9] px-2 py-1.5 text-lg"
              id={input.label}
            ></input>
          </div>
        ))}
        <button
          type="submit"
          className="w-full rounded-lg bg-black py-1 text-center font-thin text-white"
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default Form;
