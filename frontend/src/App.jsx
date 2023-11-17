import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogScreen from "./screens/CatalogScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import CartScreen from "./screens/CartScreen";
import Nav from "./components/nav/Nav";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<CatalogScreen />}></Route>
        <Route path="/" element={<CatalogScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/registration" element={<RegistrationScreen />}></Route>
        <Route path="/product/:id" element={<ProductDetailsScreen />}></Route>
        <Route path="/cart" element={<CartScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
