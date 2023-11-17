import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogScreen from "./screens/CatalogScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import CartScreen from "./screens/CartScreen";
import Nav from "./components/nav/Nav";
import { checkLogin } from "./services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "./store/auth/authActions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAuthenticated = await checkLogin();
        dispatch(setAuthStatus(isAuthenticated));
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    fetchData();
  }, [dispatch]);
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
