interface Product {
  image: string
  weight: string
  name: string
  description: string
  price: number
  id: number
}

export const products: Product[] = [
  {
    image: '/agua20l.png',
    weight: '20 Lts',
    name: 'Água',
    description: 'Galão de água 20l',
    price: 16,
    id: 10,
  },
  {
    image: '/botijaop2.png',
    weight: '02 Kg',
    name: 'P02',
    description: 'Liquinho',
    price: 40,
    id: 20,
  },
  {
    image: '/botijaop5.jpeg',
    weight: '05 Kg',
    name: 'P05',
    description: 'Botijão pequeno',
    price: 79.90,
    id: 30,
  },
  {
    image: '/botijaop13.jpg',
    weight: '13 Kg',
    name: 'P13',
    description: 'Botijão de cozinha',
    price: 104.9,
    id: 40,
  },
  {
    image: '/botijaop20.jpeg',
    weight: '20 Kg',
    name: 'P20',
    description: 'Botijão Industrial',
    price: 220,
    id: 50,
  },
  {
    image: '/botijaop45.png',
    weight: '45 Kg',
    name: 'P45',
    description: 'Botijão Residencial',
    price: 420,
    id: 60,
  },
]
