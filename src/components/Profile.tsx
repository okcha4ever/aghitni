"use client";
import { signOut, useSession } from "next-auth/react";
const Profile = () => {
  const { data: session } = useSession();
  return (
    <div className="absolute right-0 pe-5 pt-2">
      <button
        className={` ${
          !session ? "hidden" : null
        } border border-red-500 px-3 py-3 text-center`}
        onClick={() => void signOut()}
      >
        logout
      </button>
    </div>
  );
};

export default Profile;
