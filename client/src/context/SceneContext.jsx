import { createContext, useContext, useState } from "react";

const SceneContext = createContext(null);

export function SceneProvider({ children }) {
  const [scroll, setScroll] = useState(0);
  const [activePage, setActivePage] = useState("home");

  return (
    <SceneContext.Provider value={{ scroll, setScroll, activePage, setActivePage }}>
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error("useScene must be used within SceneProvider");
  return ctx;
}
