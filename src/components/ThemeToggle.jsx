import { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="btn btn-xs btn-ghost btn-circle tooltip tooltip-left"
      data-tip={theme === "light" ? "dark": "light"}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoonStarsFill className="text-lg text-gray-100" /> : <MdLightMode className="text-xl text-yellow-300" />}
    </button>
  );
};

export default ThemeToggle;
