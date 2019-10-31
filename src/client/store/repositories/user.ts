import { storeGet } from "..";

export const validatePassword = (username: string, password: string) => {
  const query = `login(username:"${username}", password:"${password}")`;
  const values = "{ id, username, firstName, lastName, email }";
  return storeGet(`${query} ${values}`);
};
