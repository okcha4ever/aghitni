import axios from "axios";

const useCheckUser = async (userId: string | null | undefined) => {
  await axios
    .get(`/api/users/signed-in?userId=${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Something went wrong in useCheckUser.tsx custom hook");
    });
};

export default useCheckUser;
