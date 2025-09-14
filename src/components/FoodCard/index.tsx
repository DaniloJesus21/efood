import {
  Container,
  FoodImage,
  Title,
  Description,
  StyledButton
} from './styles'

export type FoodCardProps = {
  image: string
  name: string
  description: string
}

const FoodCard = ({ image, name, description }: FoodCardProps) => {
  return (
    <Container>
      <FoodImage>
        <img src={image} alt={name} />
      </FoodImage>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <StyledButton type="button">Adicionar ao carrinho</StyledButton>
    </Container>
  )
}

export default FoodCard
