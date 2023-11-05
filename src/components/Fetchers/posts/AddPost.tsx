import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AddPost = ({
  text,
  location,
  name,
  phoneNumber,
}: {
  text: string;
  location: any;
  name?: any;
  phoneNumber?: any;
}) => {
  const handleRequest = async () => {
    const { data } = await axios.post("/api/posts/add", {
      text: text,
      location: location,
      name: name,
      phoneNumber: phoneNumber,
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
