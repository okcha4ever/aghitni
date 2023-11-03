import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const GetPosts = () => {
  const handleRequest = async () => {
    const { data } = await axios.get("/api/posts");
    return data;
  };
  const {
    data: posts,
    isLoading,
    status,
    refetch,
  } = useQuery({
    queryKey: ["fetch-posts"],
    queryFn: handleRequest,
  });
  return { posts, isLoading, status, refetch };
};

export default GetPosts;
