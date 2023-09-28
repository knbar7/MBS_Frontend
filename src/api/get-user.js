export const getUserFromDb = ({ email }) => {
  return fetch("http://localhost:3000/user")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not get user");
      }
      return response.json();
    })
    .then((users) => {
        return users.find((user) => user.email === email)
    })
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    });
};
