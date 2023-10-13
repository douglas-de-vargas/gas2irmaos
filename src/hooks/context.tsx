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

// Tipagem
type ClientData = {
  name: string;
  phone: string;
  street: string;
  housenumber: string;
  complement: string;
  district: string;
  city: string;
  pay: string;
  additional: string;
};

type AppState = {
  valorTotal: number;
  setValorTotal: Dispatch<SetStateAction<number>>;
  quantidade: { [key: number]: number };
  setQuantidade: React.Dispatch<
    React.SetStateAction<{ [key: number]: number }>
  >;
  clientData: ClientData;
  setClientData: React.Dispatch<React.SetStateAction<ClientData>>;
};

const AppValorContext = createContext({} as AppState);

export const useAppState = () => {
  return useContext(AppValorContext);
};

export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // valorTotal -> FormCarrinho
  const [valorTotal, setValorTotal] = useState(0);
  // quantidade -> FormCarrinho
  const [quantidade, setQuantidade] = React.useState<{ [key: number]: number }>(
    {}
  );
  // clientData -> FormDados
  const [clientData, setClientData] = useState({
    name: "",
    phone: "",
    street: "",
    housenumber: "",
    complement: "",
    district: "",
    city: "",
    pay: "",
    additional: "",
  });

  return (
    <AppValorContext.Provider
      value={{
        valorTotal,
        setValorTotal,
        quantidade,
        setQuantidade,
        clientData,
        setClientData,
      }}
    >
      {children}
    </AppValorContext.Provider>
  );
};
