import { register } from "../services/auth.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form
        className="max-w-md h-80 flex flex-col text-left mx-auto mt-40
       border-2 rounded-lg border-cyan-400 py-3 px-6 shadow-xl
          shadow-cyan-600"
      >
        <h1 className="text-center mt-8 text-2xl font-semibold">Регистрация</h1>
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
          className="mx-auto mt-8 border-2 rounded-lg border-cyan-400 py-2 px-4"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            register(username, password);
            navigate("/");
            window.location.reload();
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};

export default Registration;
