export const setAuthStatus = (isAuthed) => ({
  type: "SET_AUTH_STATUS",
  payload: isAuthed,
});

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
});

export const logout = () => ({
  type: "LOGOUT",
});
