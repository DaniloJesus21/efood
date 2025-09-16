import RestauranteCard from '../RestauranteCard'
import { Container } from './styles'
import type { Restaurante } from '../../pages/Home'

export type Props = {
  restaurantes: Restaurante[]
}

const RestauranteList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            key={restaurante.id}
            id={restaurante.id}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            tipo={restaurante.tipo}
          />
        ))}
      </div>
    </Container>
  )
}

export default RestauranteList
