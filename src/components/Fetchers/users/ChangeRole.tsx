import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ChangeRole = ({
  userId,
  newRole,
}: {
  userId: string;
  newRole: "need" | "send";
}) => {
  const handleRequest = async () => {
    const { data } = await axios.patch(
      `/api/users/roles/change?userId=${userId}`,
      {
        newRole: newRole,
      },
    );
    return data;
  };
  const {
    data: changeRole,
    isLoading,
    status,
    refetch,
  } = useQuery({
    queryKey: [`chang-role-${userId}`],
    queryFn: handleRequest,
  });
  return { changeRole, isLoading, status, refetch };
};

export default ChangeRole;
