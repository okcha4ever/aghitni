import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const SignedIn = ({ userId }: { userId: string }) => {
  const handleRequest = async () => {
    const { data } = await axios.get(`/api/users/signed-in?userId=${userId}`);
    return data;
  };
  const {
    data: user,
    isLoading,
    status,
    refetch,
  } = useQuery({
    queryKey: [`user-${userId}`],
    queryFn: handleRequest,
  });
  return { user, isLoading, status, refetch };
};

export default SignedIn;
