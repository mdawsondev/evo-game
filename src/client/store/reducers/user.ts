const initUser = {
  username: "",
  email: "",
  firstName: "",
  lastName: ""
}

const user = (initUser: any = null, action: any) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.user;
    default:
      return user;
  }
}

export default user;