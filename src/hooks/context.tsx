"use client";
import * as React from "react";

const AppValorContext = React.createContext(0);

type AppState = {
  valorTotal: number;
  setValorTotal: React.Dispatch<React.SetStateAction<number>>;
};

export const useAppState = () => {
  return React.useContext(AppValorContext);
};

export const AppStateProvider: React.FC = ({ children }) => {
  const [valorTotal, setValorTotal] = React.useState(0);

  return (
    <AppValorContext.Provider value={{ valorTotal, setValorTotal }}>
      {children}
    </AppValorContext.Provider>
  );
};
