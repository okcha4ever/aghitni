import axios from "axios";

// {
//   userId: string
//   role: string
// }

// userId

const useCheckUser = async (userId: string | null | undefined) => {
  try {
    const response = await axios.get(`/api/users/signed-in?userId=${userId}`);
    return response.data;
  } catch (err) {
    console.error("Something went wrong in useCheckUser.tsx custom hook", err);
    // Handle the error or decide what to return in case of an error
    // For example, you can return null or throw the error here
    throw err;
  }
  // const request = await fetch(
  //   `http://localhost:3000/api/users/signed-in?userId=${userId}`,
  // );
  // const data = await request.json();
  // return data;
};

export default useCheckUser;
