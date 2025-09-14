import {
  Container,
  FoodImage,
  Title,
  Description,
  StyledButton
} from './styles'
import type { Food } from '../../models/Food'

type Props = Omit<Food, 'id'>

const FoodCard = ({ image, name, description }: Props) => {
  return (
    <Container>
      <FoodImage src={image} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <StyledButton type="button">Adicionar ao carrinho</StyledButton>
    </Container>
  )
}

export default FoodCard
