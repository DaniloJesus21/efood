import {
  ButtonCompra,
  CartContainer,
  Icone,
  Imagem,
  Lista,
  Overlay,
  Produto,
  ProdutoContent,
  Sidebar,
  ValorContainer
} from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { close } from '../../store/reducers/Cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Lista>
          <Produto>
            <ProdutoContent>
              <Imagem src="https://placehold.co/80x80" alt="Imagem do prato" />
              <div>
                <h2>Nome do prato</h2>
                <p>Preço</p>
              </div>
            </ProdutoContent>
            <Icone src={lixeira} alt="Icone de lixeira" />
          </Produto>
        </Lista>
        <ValorContainer>
          <span>Valor Total</span>
          <span>0,00</span>
        </ValorContainer>
        <ButtonCompra type="button">Continuar com a entrega</ButtonCompra>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
