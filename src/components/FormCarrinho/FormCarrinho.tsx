'use client'

//next
import Image from 'next/image'

//React
import React, { useEffect } from 'react'

//hooks
import { useAppState } from '@/contexts/dadosCompra'

//icons
import { BsDashLg, BsPlusLg } from 'react-icons/bs'

//data
import { products } from './produtos'

export default function FormCarrinho() {
  const { valorTotal, setValorTotal, quantidade, setQuantidade } = useAppState()

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
      <div className="products">
        {products.map((produto) => (
          <div key={produto.id} className="product__card">
            <h2>{produto.name}</h2>
            <Image src={produto.image} alt={produto.name} width={500} height={500} />
            <p>{produto.description}</p>
            <p>Peso: {produto.weight}</p>
            <div className="product__card--quantidade">
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
        ))}
      </div>
      <div className="total_price">
        Total:{' '}
        {valorTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </>
  )
}
