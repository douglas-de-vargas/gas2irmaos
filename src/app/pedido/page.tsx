// Next
import Image from 'next/image'

// Components
import FormCarrinho from '@/components/FormCarrinho/FormCarrinho'
import Button from '@/components/Button/Button'

//Icons
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Pedido() {
  const cardIcon = true
  return (
    <>
      <h2>Produtos</h2>
      <div className="iso">
        <div className="iso__img">
          <Image src="/iso.png" alt={'imagem'} width={100} height={500} />
        </div>
        <div className="iso__title-p">
          <p>
            Na busca pela excelência, nossos produtos conquistaram a certificação ISO 9001, oferecendo a tranquilidade
            que sua família merece.
          </p>
        </div>
      </div>
      <FormCarrinho />
      <Button to={'/pedido/dados'} Icon={<AiOutlineShoppingCart />} text={'Avançar'} />
      <Image src="/image2.png" alt={'imagem'} width={300} height={500} />
    </>
  )
}
