const Nav = () => {
    const navigation = [
      {link: "/", name: "Lazy Home"},
      {link: "/", name: "Каталог"},
      {link: "/", name: "Корзина"},
      {link: "/", name: "Войти"},
      {link: "/", name: "Зарегистрироваться"},
    ]
    return (
      <div className="max-w-full">
        <ul className="flex justify-around text-xl max-w-7xl mx-auto py-8 px-5">
          {navigation.map(item=>(
            <li key={item.link}><a href="{item.link}">{item.name}</a></li>
          ))}
        </ul>
      </div>
    );
  };
  export default Nav;