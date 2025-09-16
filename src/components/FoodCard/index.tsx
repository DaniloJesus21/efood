import { useState } from 'react'
import {
  Container,
  FoodImage,
  Title,
  Description,
  StyledButton,
  Modal,
  CardModal,
  HeaderModal,
  MainModal,
  ContentModal,
  ImgModal
} from './styles'
import fechar from '../../assets/images/fechar.png'
import type { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const FoodCard = ({ restaurante }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <Container key={restaurante.id + 1}>
        <FoodImage
          src={restaurante.cardapio[restaurante.id + 1].foto}
          alt={restaurante.cardapio[restaurante.id + 1].nome}
        />
        <Title>{restaurante.cardapio[restaurante.id + 1].nome}</Title>
        <Description>
          {restaurante.cardapio[restaurante.id + 1].descricao}
        </Description>
        <StyledButton type="button" onClick={openModal}>
          Adicionar ao carrinho
        </StyledButton>
      </Container>
      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <div className="container">
            <CardModal>
              <HeaderModal>
                <img
                  src={fechar}
                  alt="Fechar"
                  onClick={() => setShowModal(false)}
                />
              </HeaderModal>
              <MainModal>
                <ImgModal
                  src={restaurante.cardapio[restaurante.id + 1].foto}
                  alt={restaurante.cardapio[restaurante.id + 1].nome}
                />
                <ContentModal>
                  <Title>{restaurante.cardapio[restaurante.id + 1].nome}</Title>
                  <Description>
                    <p>{restaurante.cardapio[restaurante.id + 1].descricao}</p>
                    <p>{restaurante.cardapio[restaurante.id + 1].porcao}</p>
                  </Description>
                  <StyledButton type="button">
                    {`Adicionar ao carrinho - R$ ${restaurante.cardapio[restaurante.id + 1].preco.toFixed(2)}`}
                  </StyledButton>
                </ContentModal>
              </MainModal>
            </CardModal>
          </div>
        </Modal>
      )}
    </>
  )
}

export default FoodCard
