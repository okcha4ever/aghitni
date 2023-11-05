import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

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
    onSuccess: async () => {
      toast("successfully added post");
    },
  });
  return { addPost, status };
};

export default AddPost;
