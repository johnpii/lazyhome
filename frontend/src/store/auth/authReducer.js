const initialState = {
  isAuthed: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_STATUS":
      return { ...state, isAuthed: action.payload };
    case "LOGIN_SUCCESS":
      return { ...state, isAuthed: true };
    case "LOGOUT":
      return { ...state, isAuthed: false };
    default:
      return state;
  }
};

export default authReducer;
