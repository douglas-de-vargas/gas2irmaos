// Next
import Image from 'next/image'

// Componentes
import LinkButton from '@/components/Utils/LinkButton'

// icons
import { BsArrowRight } from 'react-icons/bs'

//styles
import '@/styles/home.scss'

export default function SuperGas() {
  return (
    <div className='home'>
      <div>
        <div className='wrapper_img'>
          <Image
            src={'/image1.png'}
            alt={'Entregador de gás'}
            width={480}
            height={518}
          />
        </div>
        <p className='wrapper_initial_text'>
          <strong>Bem-vindo(a)</strong>, você está na central de vendas{' '}
          <span className='decored_span__primary'>Gás 2 Irmãos</span>, onde
          proporcionamos um atendimento exclusivo para garantir o{' '}
          <span className='decored_span__secondary'>melhor gás</span> com{' '}
          <span className='decored_span__secondary'>máxima qualidade</span> e{' '}
          <span className='decored_span__secondary'>preço justo</span>. Realizar
          seu pedido é rápido e a entrega é totalmente gratuita.
        </p>
      </div>
      <div className='wrapper_button'>
        <LinkButton
          to={'/produtos'}
          Icon={<BsArrowRight />}
          text={'Avançar'}
        />
      </div>
    </div>
  )
}
