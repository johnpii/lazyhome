import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogScreen from "./screens/CatalogScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import CartScreen from "./screens/CartScreen";
import Nav from "./components/nav/Nav";
import ProfileScreen from "./screens/ProfileScreen";
import { checkLogin } from "./services/auth.service";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "./store/auth/authActions";
import { useEffect } from "react";
import ProtectedRoutes from "./components/protected/ProtectedRoutes";
import AboutScreen from "./screens/AboutScreen";
import { Toaster } from "sonner";

const App = () => {
  const dispatch = useDispatch();
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
    <>
      <Toaster
        theme="dark"
        position="top-center"
        dir="auto"
        duration={2000}
        offset="100px"
      />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<CatalogScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<ProfileScreen />}></Route>
          </Route>
          <Route path="/registration" element={<RegistrationScreen />}></Route>
          <Route path="/product/:id" element={<ProductDetailsScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
