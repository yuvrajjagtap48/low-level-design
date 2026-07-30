import { useState } from "react";

function Toogle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className= {` h-screen justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h1>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>

        <button
          onClick={toggleTheme}
          className={
            darkMode
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800"
          }
        >
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </div>
  );
}

export default Toogle;