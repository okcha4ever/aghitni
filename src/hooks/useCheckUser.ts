const useCheckUser = async (userId: string | null | undefined) => {
  let response = await fetch(
    `http://localhost:3000/api/users/signed-in?userId=${userId}`,
  );
  let data = await response.json();
  return data;
};

export default useCheckUser;
