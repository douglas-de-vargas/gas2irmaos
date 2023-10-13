"use client";

// ReactJs
import * as React from "react";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";

type AppState = {
  valorTotal: number;
  setValorTotal: Dispatch<SetStateAction<number>>;
  quantidade: { [key: number]: number };
    setQuantidade: React.Dispatch<
      React.SetStateAction<{ [key: number]: number }>
    >;
};

const AppValorContext = createContext({} as AppState);

export const useAppState = () => {
  return useContext(AppValorContext);
};

export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [valorTotal, setValorTotal] = useState(0);
  const [quantidade, setQuantidade] = React.useState<{ [key: number]: number }>(
    {}
  );

  return (
    <AppValorContext.Provider
      value={{ valorTotal, setValorTotal, quantidade, setQuantidade }}
    >
      {children}
    </AppValorContext.Provider>
  );
};
