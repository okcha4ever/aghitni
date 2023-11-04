import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const DeletePost = ({ postId }: { postId: string }) => {
  const handleRequest = async () => {
    const { data } = await axios.delete(`/api/posts/delete?postId=${postId}`);
    return data;
  };
  const { mutateAsync: deletePost, status } = useMutation({
    mutationKey: ["delete-post"],
    mutationFn: handleRequest,
  });
  return { deletePost, status };
};

export default DeletePost;
