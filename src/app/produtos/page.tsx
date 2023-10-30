// Next
import Image from 'next/image'

// Components
import FormCarrinho from '@/components/Forms/FormCarrinho'

//Icons
import { MdPhoneInTalk, MdPhonelinkRing } from 'react-icons/md'

export default function Pedido() {
  return (
    <>
      <div className='contact'>
        <div className='contact__phone'>
          <MdPhonelinkRing />
          (51) 99992-8728
        </div>
        <div className='contact__phone'>
          <MdPhoneInTalk />
          (51) 3491-5000
        </div>
      </div>

      <FormCarrinho />

      <div className='section_card-page__iso'>
        <div className='iso__img'>
          <Image
            src='/iso.png'
            alt={'imagem'}
            width={100}
            height={100}
          />
        </div>
        <div className='iso__title-p'>
          <p>
            Na busca pela excelência, nossos produtos conquistaram a
            certificação ISO 9001, oferecendo a tranquilidade que sua família
            merece.
          </p>
        </div>
      </div>
    </>
  )
}
