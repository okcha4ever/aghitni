import { UserButton } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="absolute right-0 pe-5 pt-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Profile;
