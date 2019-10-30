const user = (state: any[] = [], action: any) => {
  switch (action.type) {
    case "USER_LOGIN":
      return [...state, action.user];
    case "USER_READ":
        return state[0];
    default:
      return state;
  }
}

export default user;