import axios from "axios";

export const getCart = async () => {
  try {
    const response = await axios.get("https://lazyhome.onrender.com/api/cart", {
      withCredentials: true,
    });
    return response.data.cartItems;
  } catch (e) {
    console.log(e);
  }
};

export const addItem = async (productId, quantity) => {
  try {
    await axios.post(`https://lazyhome.onrender.com/api/cart/add/${productId}`, {
      quantity,
    });
  } catch (e) {
    console.log(exports);
  }
};

export const removeItem = async (productId) => {
  try {
    await axios.get(`https://lazyhome.onrender.com/api/cart/remove/${productId}`);
  } catch (e) {
    console.log(e);
  }
};
