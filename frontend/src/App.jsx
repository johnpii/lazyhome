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
        <Route path="*" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
