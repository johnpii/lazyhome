export const setAuthStatus = (isAuthed) => ({
  type: "SET_AUTH_STATUS",
  payload: isAuthed ? true : false, // note: watch this line, may cause errors
});

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const logout = () => ({
  type: "LOGOUT",
});
