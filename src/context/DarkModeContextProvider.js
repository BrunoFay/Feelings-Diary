import { darkModeContext } from "./darkModeContext";
import { useState } from "react";

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }
  const valueToProvide = { isDarkMode, toggleMode };
  return (
    <darkModeContext.Provider value={valueToProvide}>
      {children}
    </darkModeContext.Provider>
  )
}
export default DarkModeContextProvider;