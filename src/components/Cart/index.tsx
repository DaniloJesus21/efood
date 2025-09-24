import {
  Aside,
  ButtonCompra,
  Icone,
  Imagem,
  Lista,
  Overlay,
  Produto,
  ProdutoContent,
  ValorContainer
} from './styles'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  return (
    <div>
      <Overlay></Overlay>
      <Aside>
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
      </Aside>
    </div>
  )
}

export default Cart
