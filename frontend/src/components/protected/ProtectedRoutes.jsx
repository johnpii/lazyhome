import { useSelector } from "react-redux";
import LoginScreen from "../../screens/LoginScreen";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  return isAuthed ? <Outlet /> : <LoginScreen />;
};

export default ProtectedRoutes;
