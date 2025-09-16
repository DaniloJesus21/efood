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
import type { Food } from '../../models/Food'
import fechar from '../../assets/images/fechar.png'

type Props = Omit<Food, 'id'>

const FoodCard = ({ image, name, description }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <Container>
        <FoodImage src={image} alt={name} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <StyledButton type="button" onClick={openModal}>
          Adicionar ao carrinho
        </StyledButton>
      </Container>
      {showModal && (
        <Modal>
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
                <ImgModal src={image} alt={name} />
                <ContentModal>
                  <Title>{name}</Title>
                  <Description>{description}</Description>
                  <StyledButton type="button">
                    Adicionar ao carrinho - R$ 60,00
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
