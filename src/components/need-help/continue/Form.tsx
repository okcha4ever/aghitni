"use client";
import { toast } from "sonner";
import useInput from "@/hooks/use-input"; // Import your custom hook
import AddPost from "@/components/Fetchers/posts/AddPost";

const Form = ({ text }: { text: string }) => {
  // Use the custom hook for each input
  const fullName = useInput((value) => value.trim() !== "");
  const phoneNumber = useInput((value) => value.trim() !== "");
  const location = useInput((value) => value.trim() !== "");

  const { addPost } = AddPost({
    text: text,
    location: location.value,
    name: fullName.value,
    phoneNumber: phoneNumber.value,
  });

  const submitHandler = (e) => {
    // Check if any input has an error
    if (fullName.hasError || phoneNumber.hasError || location.hasError) {
      e.preventDefault();
      toast("Please fill in all fields correctly.");
    } else {
      addPost();
      toast("Done. We are coming for you");
    }
  };

  const inputs = [
    {
      label: "Full Name",
      placeholder: "Ahmed",
      input: fullName,
    },
    {
      label: "Phone Number",
      placeholder: "(+1) 23456789",
      input: phoneNumber,
    },
    {
      label: "Location",
      placeholder: "Gaza in-front of mosque",
      input: location,
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="h-auto w-auto space-y-5 rounded-md bg-[#D9D9D9] px-10 py-10">
        <p className="text-xl font-bold">
          Please fill in these information carefully
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
              className={`rounded-lg border border-gray-500 bg-[#e0dcdc] px-2 py-1.5 text-lg ${
                input.input.hasError ? "border-red-500" : ""
              }`} // Add conditional classes for error
              id={input.label}
              value={input.input.value}
              onChange={input.input.valueChangeHandler}
              onBlur={input.input.blurHandler}
            ></input>
            {input.input.hasError && (
              <p className="text-sm text-red-500">
                Please enter a valid {input.label}.
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full rounded-lg bg-black py-1 text-center font-thin text-white"
          onClick={() => addPost()}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default Form;
