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
import type { Prato } from '../../pages/Home'
import { getDescricao } from '../../utils'

const FoodCard = ({ prato }: { prato: Prato }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Container>
        <FoodImage src={prato.foto} alt={prato.nome} />
        <Title>{prato.nome}</Title>
        <Description>{getDescricao(prato.descricao, 150)}</Description>
        <StyledButton type="button" onClick={() => setShowModal(true)}>
          Adicionar ao carrinho
        </StyledButton>
      </Container>

      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <div className="container">
            <CardModal onClick={(e) => e.stopPropagation()}>
              <HeaderModal>
                <img
                  src={fechar}
                  alt="Fechar"
                  onClick={() => setShowModal(false)}
                />
              </HeaderModal>
              <MainModal>
                <ImgModal src={prato.foto} alt={prato.nome} />
                <ContentModal>
                  <Title>{prato.nome}</Title>
                  <Description>
                    <p>{prato.descricao}</p>
                    <p>Serve: {prato.porcao}</p>
                  </Description>
                  <StyledButton type="button">
                    {`Adicionar ao carrinho - R$ ${prato.preco.toFixed(2)}`}
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
