"use client";

// ReactJs
import * as React from "react";


const AppValorContext = React.createContext<{}>({});

type AppState = {
  valorTotal: number;
  setValorTotal: React.Dispatch<React.SetStateAction<number>>;
  quantidade: { [key: number]: number };
};

export const useAppState = () => {
  return React.useContext(AppValorContext);
};

export const AppStateProvider: React.FC = ({ children }) => {
  const [valorTotal, setValorTotal] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState<{ [key: number]: number }>({});

  return (
    <AppValorContext.Provider value={{ valorTotal, setValorTotal, quantidade, setQuantidade }}>
      {children}
    </AppValorContext.Provider>
  );
};