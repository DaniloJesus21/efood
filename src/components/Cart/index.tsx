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
import { close, remove } from '../../store/reducers/Cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => (acc += item.preco), 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Lista>
          {items.map((item) => (
            <Produto key={item.id}>
              <ProdutoContent>
                <Imagem src={item.foto} alt={item.nome} />
                <div>
                  <h2>{item.nome}</h2>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
              </ProdutoContent>
              <Icone
                src={lixeira}
                alt="Icone de lixeira"
                onClick={() => removeItem(item.id)}
              />
            </Produto>
          ))}
        </Lista>
        <ValorContainer>
          <span>Valor Total</span>
          <span>R$ {getTotalPrice().toFixed(2)}</span>
        </ValorContainer>
        <ButtonCompra type="button">Continuar com a entrega</ButtonCompra>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
