export const formatPrice = (n) => {
  const options1 = { style: "currency", currency: "RUB" };
  const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);
  return numberFormat1.format(n);
};
