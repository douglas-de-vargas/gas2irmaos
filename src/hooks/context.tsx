"use client";
import { createContext, useContext, useState } from "react";

const AppValorContext = createContext();

export const useAppState = () => {
  return useContext(AppValorContext);
};

export const AppStateProvider = ({ children }) => {
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <AppValorContext.Provider value={{ valorTotal, setValorTotal }}>
      {children}
    </AppValorContext.Provider>
  );
};
