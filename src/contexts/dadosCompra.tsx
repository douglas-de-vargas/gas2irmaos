'use client'

// ReactJs
import * as React from 'react'
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren
} from 'react'

// Data bases
import { products } from '@/components/Forms/produtos'

// Tipagem
import { Product } from '@/components/Forms/produtos'

export interface IclientData {
  name: string
  phone: string
  street: string
  housenumber: string
  complement: string
  district: string
  city: string
  pay: string
  additional: string
  [key: string]: string
}

export interface IappState {
  valorTotal: number
  setValorTotal: Dispatch<SetStateAction<number>>
  quantidade: { [key: number]: number }
  setQuantidade: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>
  clientData: IclientData
  setClientData: React.Dispatch<React.SetStateAction<IclientData>>
  selectedProducts: {
    produto: Product
    selectedQuantity: number
  }[]
}

// Context
const ClientProvider = createContext({} as IappState)

// Exportar contexto
export const useAppState = () => {
  return useContext(ClientProvider)
}

// Provider
export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // valorTotal -> FormCarrinho
  const [valorTotal, setValorTotal] = useState(0) //fim

  // quantidade -> FormCarrinho
  const [quantidade, setQuantidade] = React.useState<{
    [key: number]: number
  }>({}) //fim

  // clientData -> FormDados
  const [clientData, setClientData] = useState({
    name: '',
    phone: '',
    street: '',
    housenumber: '',
    complement: '',
    district: '',
    city: '',
    pay: '',
    additional: ''
  }) //fim

  // Lista de produtos selecionados
  const selectedProducts = products
    .map(produto => ({
      produto,
      selectedQuantity: quantidade[produto.id] || 0
    }))
    .filter(selectedProduct => selectedProduct.selectedQuantity > 0)
  //fim

  // *** ///
  return (
    <ClientProvider.Provider
      value={{
        valorTotal,
        setValorTotal,
        quantidade,
        setQuantidade,
        clientData,
        setClientData,
        selectedProducts
      }}>
      {children}
    </ClientProvider.Provider>
  )
}
