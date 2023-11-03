import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AddPost = ({ text, location }: { text: string; location: string }) => {
  const handleRequest = async () => {
    const { data } = await axios.post("/api/posts/add", {
      text: text,
      location: location,
    });
    return data;
  };
  const { mutateAsync: addPost, status } = useMutation({
    mutationKey: ["add-post"],
    mutationFn: handleRequest,
  });
  return { addPost, status };
};

export default AddPost;
