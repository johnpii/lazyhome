import axios from "axios";

export const register = async (username, password) => {
  try {
    const res = await axios.post(
      "/api/auth/registration",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
    return { res: res, status: res.status };
  } catch (e) {
    return { res: e, status: e.response.status };
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.post(
      "/api/auth/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return { res: res, status: res.status };
  } catch (e) {
    return { res: e, status: e.response.status };
  }
};

export const logout = async () => {
  return axios
    .get("/api/auth/logout", {
      withCredentials: true,
    })
    .then((res) => res.data)
    .catch((e) => console.log(e.response));
};

export const checkLogin = async () => {
  return axios
    .get("/api/auth/checkJwt", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("check login, ", res.data);
      return res.data.decoded ? true : false;
    })
    .catch((e) => console.log(e.response));
};
// export const checkLogin = async () => {
//   try {
//     const { data } = await axios.get("/api/auth/checkJwt", {
//       withCredentials: true,
//     });
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// another variant of checkLogin
