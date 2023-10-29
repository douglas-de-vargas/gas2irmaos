export interface Product {
  image: string
  weight: string
  name: string
  description: string
  price: number
  discount?: number
  id: number
}

export const products: Product[] = [
  {
    image: '/agua20l.png',
    weight: '20 Litros',
    name: 'Água Mineral',
    description: 'Galão 20 litros',
    price: 16,
    id: 10
  },
  {
    image: '/botijaop2.png',
    weight: '02 Quilos',
    name: 'Botijão P02',
    description: 'Liquinho',
    price: 40,
    id: 20
  },
  {
    image: '/botijaop5.jpeg',
    weight: '05 Quilos',
    name: 'Botijão P05',
    description: 'Ideal para cozinha pequena',
    price: 79.9,
    id: 30
  },
  {
    image: '/botijaop13.jpg',
    weight: '13 Quilos',
    name: 'Botijão P13',
    description: 'Gás de cozinha tradicional',
    price: 104.9,
    id: 40
  },
  {
    image: '/botijaop20.jpeg',
    weight: '20 Quilos',
    name: 'Botijão P20',
    description: 'Para uso industrial',
    price: 220,
    id: 50
  },
  {
    image: '/botijaop45.png',
    weight: '45 Quilos',
    name: 'Botijão P45',
    description: 'Para alta pressão',
    price: 440,
    discount: 419.9,
    id: 60
  }
]
