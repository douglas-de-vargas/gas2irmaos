'use client'

//next
import Image from 'next/image'

//React
import React, { useState, useEffect } from 'react'

//hooks
import { useAppState } from '@/contexts/dadosCompra'

//icons
import { BsDashLg, BsPlusLg } from 'react-icons/bs'

//data
import { products } from './produtos'

export default function Loja() {
  type AppState = {
    valorTotal: number
    setValorTotal: React.Dispatch<React.SetStateAction<number>>
    quantidade: { [key: number]: number }
    setQuantidade: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>
  }

  const { valorTotal, setValorTotal, quantidade, setQuantidade } = useAppState() as unknown as AppState

  const decrementQuantidade = (id: number) => {
    if (quantidade[id] > 0) {
      setQuantidade((prevQuantidade) => ({
        ...prevQuantidade,
        [id]: prevQuantidade[id] - 1,
      }))
    }
  }

  const incrementarQuantidade = (id: number) => {
    setQuantidade((prevQuantidade) => ({
      ...prevQuantidade,
      [id]: (prevQuantidade[id] || 0) + 1,
    }))
  }

  useEffect(() => {
    let newTotal = 0
    for (const id in quantidade) {
      if (quantidade.hasOwnProperty(id)) {
        newTotal += quantidade[id] * (products.find((item) => item.id === parseInt(id))?.price || 0)
      }
    }
    setValorTotal(newTotal)
  }, [quantidade, setValorTotal])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {products.map((produto) => (
          <div
            key={produto.id}
            className="produto_card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
              alignItems: 'center',
              textAlign: 'center',
              padding: '.8rem',
              width: '300px',
              boxShadow: '0 0 1px 1px rgba(0,0,0,.1)',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '.5rem',
              }}
            >
              <Image src={produto.image} alt={produto.name} width={500} height={500} />
              <h2>{produto.name}</h2>
              <p>{produto.description}</p>
              <p>Peso: {produto.weight}</p>
              <div className="produto_card_quant">
                <BsDashLg onClick={() => decrementQuantidade(produto.id)} />
                {quantidade[produto.id] || 0}
                <BsPlusLg onClick={() => incrementarQuantidade(produto.id)} />
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                }}
              >
                {quantidade[produto.id] > 0
                  ? (produto.price * (quantidade[produto.id] || 1)).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                  : produto.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
              </div>
            </div>
          </div>
        ))}
        <div style={{ fontSize: '1.5rem' }}>
          Total:{' '}
          {valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </div>
    </>
  )
}
