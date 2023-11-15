import axios from "axios";

export const getCart = async () => {
  try {
    const res = await axios.get("/api/cart", {
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
