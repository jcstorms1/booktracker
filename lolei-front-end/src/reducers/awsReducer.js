export default function authReducer(state = { currentUser: {} }, action) {
  switch (action.type) {
    case "GET_ISBN":
      let user = action.res.user;
      return {
        ...state,
        currentUser: {
          id: user.id,
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          accountType: user.account_type,
          children: user.children
        }
      };
    default:
      return state;
  }
}
