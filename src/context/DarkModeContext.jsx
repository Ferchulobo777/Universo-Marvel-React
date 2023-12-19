import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();


export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Intenta obtener el estado de darkMode desde localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    // Si no hay un valor en localStorage, utiliza el valor predeterminado (false)
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  //Use useEffect para guardar el estado en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}