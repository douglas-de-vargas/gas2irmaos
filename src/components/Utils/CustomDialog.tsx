import '@/styles/CustomDialog.scss'

// functions
import { formatValues } from '@/functions/functions'

//hooks
import { useAppState } from '@/contexts/dadosCompra'

//icons
import { BsArrowLeft, BsWhatsapp } from 'react-icons/bs'

type ICustomDialogProps = {
  showDialog: boolean
  onYesClick: () => void
  onNoClick: () => void
}

export default function CustomDialog ({
  showDialog,
  onYesClick,
  onNoClick
}: ICustomDialogProps) {
  const { clientData, valorTotal, selectedProducts } = useAppState()
  return (
    <div
      className='custom_dialog'
      style={{ display: showDialog ? 'flex' : 'none' }}>
      <div className='internal'>
        <h1 className='center'>Verifique as informações</h1>
        <div>
          {' '}
          <p>
            <strong>Cliente:</strong> {clientData.name}
          </p>
          <p>
            <strong>Contato:</strong> {clientData.phone}
          </p>
          <p>
            <strong>Endereço:</strong> {clientData.street},{' '}
            {clientData.housenumber}
          </p>
          <p>
            <strong>Compl.:</strong> {clientData.complement || 'Não'}
          </p>
          <p>
            <strong>Bairro:</strong> {clientData.district}
            {' - '}
            {clientData.city}
          </p>
          <br />
          <p>
            <strong>Informações Adicionais:</strong>
          </p>
          <p>{clientData.additional || 'Não'}</p>
          <br />
          <p>
            <strong>Produtos Selecionados:</strong>
          </p>
          <ul>
            {selectedProducts.map(selectedProduct => (
              <li key={selectedProduct.produto.id}>
                {selectedProduct.selectedQuantity.toString().padStart(2, '0')}{' '}
                {selectedProduct.produto.name}
                {' - '}
                {formatValues(
                  selectedProduct.produto.price *
                    selectedProduct.selectedQuantity
                )}
              </li>
            ))}
          </ul>
        </div>
        <p className='center'>
          <strong>
            Total: {formatValues(valorTotal)}
            {' - '}
            {clientData.pay}
          </strong>
        </p>
        <div className='buttons'>
          <button
            className='button'
            onClick={onNoClick}>
            <BsArrowLeft /> Revisar
          </button>
          <button
            className='button'
            onClick={onYesClick}>
            <BsWhatsapp /> Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
