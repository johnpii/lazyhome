import { logout } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "../store/auth/authActions";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  const navigate = useNavigate();
  const quit = () => {
    logout();
    dispatch(setAuthStatus(false));
    navigate("/login");
  };
  return (
    <div className="px-4">
      <h1 className="max-w-screen-2xl mx-auto mt-20 text-3xl font-bold text-left">
        Профиль
      </h1>
      <button
        onClick={quit}
        className="mt-5 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl"
      >
        Выйти
      </button>
    </div>
  );
};

export default ProfileScreen;
