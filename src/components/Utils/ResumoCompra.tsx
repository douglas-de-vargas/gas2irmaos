//hooks
import { useAppState } from '@/contexts/dadosCompra'

//icons
import { FiAlertTriangle } from 'react-icons/fi'

//styles
import '@/styles/ResumoCompra.scss'

//functions
import { formatValues } from '@/functions/functions'

// *** //
export default function ResumoCompra() {
  const { valorTotal, selectedProducts } = useAppState()
  return (
    <div className='resumo_compra'>
      {valorTotal > 0 ? (
        <div className='summary'>
          <h3 className='title'>RESUMO DA COMPRA</h3>
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

          <span style={{ color: 'green', display: 'block', fontSize: '.7rem' }}>
            Entrega Grátis
          </span>

          <h3>Total: {formatValues(valorTotal)}</h3>
        </div>
      ) : (
        <div className='alerts'>
          <div className='alerts_icon'>
            <FiAlertTriangle stroke={'hsl(38, 92.1%, 50.2%)'} />
          </div>
          <div className='alerts_body'>
            <h1>Alerta!</h1>
            <p>Nenhum produto selecionado!</p>
          </div>
        </div>
      )}
    </div>
  )
}
