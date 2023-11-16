import axios from "axios";

export const register = async (username, password) => {
  try {
    const res = await axios.post("/api/auth/registration", {
      username,
      password,
    });
    console.log(res.data.message);
  } catch (e) {
    console.log(e);
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.post("/api/auth/login", {
      username,
      password,
    });
    console.log(res.data.message);
  } catch (e) {
    console.log(e);
  }
};
