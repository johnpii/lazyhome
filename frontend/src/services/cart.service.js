import axios from "axios";

export const getCart = async () => {
  try {
    const response = await axios.get("/api/cart", {
      withCredentials: true,
    });
    return response.data.cartItems;
  } catch (e) {
    console.log(e);
  }
};

export const addItem = async (productId, quantity) => {
  try {
    const res = await axios.post(`/api/cart/add/${productId}`, {
      quantity,
    });
    return res;
  } catch (e) {
    return e.response.message;
  }
};

export const removeItem = async (productId) => {
  try {
    await axios.get(`/api/cart/remove/${productId}`);
  } catch (e) {
    console.log(e);
  }
};
