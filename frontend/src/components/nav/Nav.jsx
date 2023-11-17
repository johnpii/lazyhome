import { Link } from "react-router-dom";
const Nav = () => {
  const navigation = [
    { link: "/home", name: "Lazy Home" },
    { link: "/catalog", name: "Каталог" },
    { link: "/cart", name: "Корзина" },
    { link: "/login", name: "Войти" },
  ];
  return (
    <div className="max-w-full bg-[#494949] px-4">
      <ul className="max-w-screen-2xl flex justify-between text-2xl font-bold mx-auto py-8 px-0">
        {navigation.map((item) => (
          <li key={item.link}>
            <Link to={item.link} className="active:text-cyan-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;
