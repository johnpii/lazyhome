import { Link } from "react-router-dom";
const Nav = () => {
  const navigation = [
    { link: "/home", name: "Lazy Home" },
    { link: "/catalog", name: "Каталог" },
    { link: "/cart", name: "Корзина" },
    { link: "/login", name: "Войти" },
  ];
  return (
    <div className="max-w-full bg-[#494949]">
      <ul className="max-w-7xl flex justify-around text-xl mx-auto py-8 px-5">
        {navigation.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;
