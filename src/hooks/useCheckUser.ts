const useCheckUser = async (userId: string | null | undefined) => {
  const response = await fetch(
    `http://localhost:3000/api/users/signed-in?userId=${userId}`,
  );
  const data = await response.json();
  return data;
};

export default useCheckUser;
