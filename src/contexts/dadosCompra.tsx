"use client";

// ReactJs
import * as React from "react";
import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    PropsWithChildren
} from "react";

// Hook Form
import { useFormContext } from "react-hook-form";

// Tipagem
export interface IclientData {
    name: string;
    phone: string;
    street: string;
    housenumber: string;
    complement: string;
    district: string;
    city: string;
    pay: string;
    additional: string;
}

interface IappState {
    valorTotal: number;
    setValorTotal: Dispatch<SetStateAction<number>>;
    quantidade: { [key: number]: number };
    setQuantidade: React.Dispatch<
        React.SetStateAction<{ [key: number]: number }>
    >;
    clientData: IclientData;
    setClientData: React.Dispatch<React.SetStateAction<IclientData>>;
}

// Context
const AppValorContext = createContext({} as IappState);

// Exportar contexto
export const useAppState = () => {
    return useContext(AppValorContext);
};

// Provider
export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
    // valorTotal -> FormCarrinho
    const [valorTotal, setValorTotal] = useState(0);

    // quantidade -> FormCarrinho
    const [quantidade, setQuantidade] = React.useState<{
        [key: number]: number;
    }>({});

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
        additional: ""
    });
    const methods = useFormContext();
    return (
        <AppValorContext.Provider
            value={{
                valorTotal,
                setValorTotal,
                quantidade,
                setQuantidade,
                clientData,
                setClientData
            }}
        >
            {children}
        </AppValorContext.Provider>
    );
};
