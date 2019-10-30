import { storeGet } from "../";

let user = null;

const validatePassword = (username: string, password: string) => {
  const query = `login(username:"${username}", password:"${password}")`;
  const values = "{ id, username, firstName, lastName, email }";
  return storeGet(`${query} ${values}`);
};

export const login =
  (username: string, password: string) =>
  (dispatch: any) =>
  validatePassword(username, password)
    .then((res: any) => {
      user = res.data.login;
      dispatch(userLogin(user))
    });

export const userLogin = (user: any) => ({
  type: 'USER_LOGIN',
  user
})