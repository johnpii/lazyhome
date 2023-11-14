export const fetchProducts = {
  async getAll() {
    const response = await fetch("/api");
    const data = await response.json();
    return data.products;
  },
  async getById(id) {
    const response = await fetch("/api");
    const data = await response.json();
    return data.products.filter((jsonObject) => jsonObject["_id"] === id)[0];
  },
};
