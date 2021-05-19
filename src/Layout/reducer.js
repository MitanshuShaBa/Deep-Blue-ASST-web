export const initialState = {
  user: null,
  userDoc: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "UPDATE_USERDOC":
      return {
        ...state,
        userDoc: action.userDoc,
      };
    default:
      return state;
  }
}

export default reducer;
