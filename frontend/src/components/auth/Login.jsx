import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/", {
        username,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form action="POST">
        <label htmlFor="name">Имя пользователя</label>
        <input
          type="text"
          name="nickname"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          text
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onClick={() => submit()} />
      </form>
    </>
  );
};

export default Login;
