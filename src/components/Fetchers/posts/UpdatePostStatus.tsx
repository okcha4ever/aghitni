import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const UpdatePostStatus = ({
  postId,
  newStatus,
}: {
  postId: string;
  newStatus: "inProgress" | "completed";
}) => {
  const handleRequest = async () => {
    const { data } = await axios.patch(
      `/api/posts/update-status?postId=${postId}`,
      {
        newStatus: newStatus,
      },
    );
    return data;
  };
  const { mutateAsync: updatePost, status } = useMutation({
    mutationKey: ["update-post"],
    mutationFn: handleRequest,
  });
  return { updatePost, status };
};

export default UpdatePostStatus;
