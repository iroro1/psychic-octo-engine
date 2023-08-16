import { useEffect, useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Main from "./pages/Main";

const theme = localStorage.getItem("myTheme");
function App() {
  const [appTheme, setApptheme] = useState(null);
  useEffect(() => {
    !theme && localStorage.setItem("myTheme", "dark");
    !theme ? setApptheme("dark") : setApptheme(theme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        value: appTheme,
        setValue: setApptheme,
      }}
    >
      <div
        className={`${
          appTheme === "dark"
            ? "bg-[#0F172B] text-white"
            : "bg-[#ffffff90] text-[#333]"
        }`}
      >
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
