import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth.service";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../store/auth/authActions";
import { toast } from "sonner";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButton = async (e) => {
    e.preventDefault();
    const { res, status } = await login(username, password);
    if (status === 201) {
      // toast.custom((t) => (
      //   <div className="mt-20 mx-auto p-4 border rounded-md border-cyan-400 bg-zinc-800">
      //     Выполнен вход
      //   </div>
      // ));
      toast.success("Успешный вход");
      dispatch(setAuthStatus(true));

      setTimeout(() => {
        navigate("/catalog");
      }, 1500);
    } else {
      toast.error("Ошибка входа");
    }
    console.log(res, status);
  };
  return (
    <div className="px-4">
      <form
        className="max-w-md h-80 flex flex-col text-left mx-auto mt-40 
      border-2 rounded-lg border-cyan-400 py-3 px-6 shadow-xl
          shadow-cyan-600"
      >
        <h1 className="text-center mt-8 text-2xl font-semibold">Вход</h1>
        <div className="mt-8 mx-auto">
          <input
            className="border rounded-sm py-1 px-2"
            type="text"
            name="nickname"
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-5 mx-auto">
          <input
            className="border rounded-sm py-1 px-2"
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="mx-auto mt-3 border-2 rounded-lg border-cyan-400 py-1 px-4"
          type="submit"
          onClick={handleButton}
        >
          Войти
        </button>
        <p className="text-center mt-8">
          Нет аккаунта?
          <Link to="/registration" className="font-bold text-cyan-400">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
