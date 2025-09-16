import type { Restaurante } from '../../pages/Home'
import { Container, Tipo, TitleCapa } from './style'

type Props = {
  restaurante: Restaurante
}

const Capa = ({ restaurante }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <div className="content">
          <Tipo>{restaurante.tipo}</Tipo>
          <TitleCapa>{restaurante.titulo}</TitleCapa>
        </div>
      </div>
    </Container>
  )
}

export default Capa
