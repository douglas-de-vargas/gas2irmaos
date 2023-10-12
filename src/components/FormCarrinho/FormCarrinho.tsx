"use client";

//next
import Image from "next/image"

//React
import React, { useState, useEffect } from "react";

//hooks
import { useAppState } from "@/hooks/context";

//icons
import { BsDashLg, BsPlusLg } from "react-icons/bs";

interface Product {
  image: string;
  weight: string;
  name: string;
  description: string;
  price: number;
  id: number;
}

const products: Product[] = [
  {
    image: "/agua20l.png",
    weight: "20 Lts",
    name: "Água",
    description: "Galão de água 20l",
    price: 16,
    id: 10,
  },
  {
    image: "/botijaop2.png",
    weight: "02 Kg",
    name: "P02",
    description: "Liquinho",
    price: 40,
    id: 20,
  },
  {
    image: "/botijaop5.jpeg",
    weight: "05 Kg",
    name: "P05",
    description: "Botijão pequeno",
    price: 60,
    id: 30,
  },
  {
    image: "/botijaop13.jpg",
    weight: "13 Kg",
    name: "P13",
    description: "Botijão de cozinha",
    price: 104.9,
    id: 40,
  },
  {
    image: "/botijaop20.jpeg",
    weight: "20 Kg",
    name: "P20",
    description: "Botijão Industrial",
    price: 220,
    id: 50,
  },
  {
    image: "/botijaop45.png",
    weight: "45 Kg",
    name: "P45",
    description: "Botijão Residencial",
    price: 400,
    id: 60,
  },
];

export default function Loja() {
  const [quantidade, setQuantidade] = useState<{ [key: number]: number }>({});

  interface AppState {
    valorTotal: number;
    setValorTotal: (value: number) => void;
  }

const { valorTotal, setValorTotal } = useAppState() as unknown as AppState;


  const decrementQuantidade = (id: number) => {
    if (quantidade[id] > 0) {
      setQuantidade((prevQuantidade) => ({
        ...prevQuantidade,
        [id]: prevQuantidade[id] - 1,
      }));
    }
  };

  const incrementarQuantidade = (id: number) => {
    setQuantidade((prevQuantidade) => ({
      ...prevQuantidade,
      [id]: (prevQuantidade[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    let newTotal = 0;
    for (const id in quantidade) {
      if (quantidade.hasOwnProperty(id)) {
        newTotal +=
          quantidade[id] *
          (products.find((item) => item.id === parseInt(id))?.price || 0);
      }
    }
    setValorTotal(newTotal);
  }, [quantidade]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {products.map((produto) => (
          <div
            key={produto.id}
            className="produto_card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              alignItems: "center",
              textAlign: "center",
              padding: ".8rem",
              width: "300px",
              boxShadow: "0 0 1px 1px rgba(0,0,0,.1)",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
              }}
            >
              <Image
              src={produto.image}
              alt={produto.name}
              width={1}
              height={1}
              />
              <h2>{produto.name}</h2>
              <p>{produto.description}</p>
              <p>Peso: {produto.weight}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space between",
                  alignItems: "center",
                  fontSize: "2rem",
                }}
              >
                <BsDashLg
                  onClick={() => decrementQuantidade(produto.id)}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "4px",
                  }}
                />
                {quantidade[produto.id] || 0}
                <BsPlusLg
                  onClick={() => incrementarQuantidade(produto.id)}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {quantidade[produto.id] > 0
                  ? (
                      produto.price * (quantidade[produto.id] || 1)
                    ).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
              </div>
            </div>
          </div>
        ))}
        <div style={{ fontSize: "1.5rem" }}>
          Total:{" "}
          {valorTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </>
  );
}
