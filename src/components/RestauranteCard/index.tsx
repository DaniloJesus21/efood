import { LinkButton } from '../Button/styles'
import estrela from '../../assets/images/estrela.png'
import {
  Card,
  CardImage,
  CardContent,
  Tag,
  Tags,
  TitleContainer,
  Title,
  Rating,
  CardDescription
} from './styles'

type Props = {
  id: number
  image: string
  name: string
  description: string
  info: string[]
  rating: number
}

const RestauranteCard = ({
  id,
  image,
  name,
  description,
  info,
  rating
}: Props) => {
  return (
    <Card key={id}>
      <CardImage src={image} alt={name} />
      <Tags>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Tags>
      <CardContent>
        <TitleContainer>
          <Title>{name}</Title>
          <Rating>
            <p>{rating}</p>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </TitleContainer>
        <CardDescription>{description}</CardDescription>
        <LinkButton type="link" to="/restaurante">
          Saiba mais
        </LinkButton>
      </CardContent>
    </Card>
  )
}

export default RestauranteCard
