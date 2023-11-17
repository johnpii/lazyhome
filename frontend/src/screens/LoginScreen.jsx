import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/auth.service";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form className="max-w-md h-80 flex flex-col border-2 text-left mx-auto mt-40">
        <h1 className="text-center mt-10">Вход</h1>
        <div className="mt-10 mx-auto">
          <input
            className=""
            type="text"
            name="nickname"
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-5 mx-auto">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="mx-auto mt-3"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            login(username, password);
            navigate("/");
          }}
        >
          Войти
        </button>
        <p className="text-center mt-10 ">
          Нет аккаунта?{" "}
          <Link to="/registration" className="font-bold">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginScreen;
