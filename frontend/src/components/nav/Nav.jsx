import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as ReactMenu } from "./icons8-menu-w.svg";
import { ReactComponent as ReactClose } from "./icons8-close-w.svg";
import { useState } from "react";
const Nav = () => {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  const [open, setOpen] = useState(false);
  const navigation = [
    { link: "/about", name: "О нас" },
    { link: "/catalog", name: "Каталог" },
    { link: "/cart", name: "Корзина" },
    // { link: "/login", name: "Войти" },
  ];
  return (
    <div
      className="flex justify-between md:flex-col max-w-full bg-[#494949] md:bg-[#494949]
       md:left-0 w-auto md:w-full 
       md:transition-all md:duration-500 md:ease-in md:top-0"
    >
      <Link to="/catalog">
        <h1 className="py-8 px-4 text-left text-2xl font-semibold">
          Lazy Home
        </h1>
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="md:block cursor-pointer hidden md:absolute md:right-8 md:top-6"
      >
        {open ? <ReactClose /> : <ReactMenu />}
      </div>
      <ul
        className={`flex text-2xl font-bold py-8 md:flex-col md:text-left md:py-0 static md:absolute
        md:bg-[#494949] z-auto md:z-[6] w-auto md:w-full 
       ${
         open ? "md:top-20 md:opacity-100" : "md:top-[-352px]"
       } md:opacity-0 opacity-100`}
      >
        {navigation.map((item) => (
          <li key={item.link} className="md:my-7 mr-20 md:px-4">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        {isAuthed ? (
          <li className="md:my-7 mr-20 last:mr-0 md:px-4">
            <Link to="/profile" className="">
              Профиль
            </Link>
          </li>
        ) : (
          <li className="md:my-7 mr-20 last:mr-0 md:px-4">
            <Link to="/login">Войти</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Nav;
