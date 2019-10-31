import { validatePassword } from "../repositories/user";

/** Accepts a username and password. */
export const login =
  (username: string, password: string) =>
    (dispatch: any) =>
      validatePassword(username, password)
        .then((res: any) => {
          const user = res.data.login;
          dispatch(userLogin(user));
        });

export const userLogin = (user: any) => ({
  type: 'USER_LOGIN',
  user
})