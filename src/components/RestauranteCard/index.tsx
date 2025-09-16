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
import { getDescricao } from '../../utils'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestauranteCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  return (
    <Card key={id}>
      <CardImage src={capa} alt={titulo} />
      <Tags>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Tags>
      <CardContent>
        <TitleContainer>
          <Title>{titulo}</Title>
          <Rating>
            <p>{avaliacao}</p>
            <img src={estrela} alt="Estrela" />
          </Rating>
        </TitleContainer>
        <CardDescription>{getDescricao(descricao, 250)}</CardDescription>
        <LinkButton type="link" to={`/restaurante/${id}`}>
          Saiba mais
        </LinkButton>
      </CardContent>
    </Card>
  )
}

export default RestauranteCard
