import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <button
        className="border border-red-500 px-3 py-3 text-center"
        onClick={() => void signIn("google")}
      >
        signin
      </button>
    </div>
  );
};

export default SignIn;
