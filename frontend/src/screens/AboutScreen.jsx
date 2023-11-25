import { useNavigate } from "react-router-dom";
const AboutScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:max-w-[280px]">
      <h1 className="max-w-screen-2xl mx-auto mt-20 text-3xl sm:text-xl font-bold">
        О нас
      </h1>
      <p className="max-w-3xl mx-auto mt-10 text-2xl sm:text-base text-left">
        Lazy Home - новый онлайн маркетплейс товаров для умного дома. Перейдите
        в каталог, чтобы увидеть наличие интересующих вас товаров.
      </p>
      <button
        onClick={() => navigate("/catalog")}
        className="mt-20 border-2 rounded-lg border-cyan-400 py-3 px-6 min-w-max
            font-semibold text-xl"
      >
        Перейти в каталог
      </button>
    </div>
  );
};

export default AboutScreen;
