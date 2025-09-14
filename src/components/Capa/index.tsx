import banner from '../../assets/images/italian_restaurant.png'

import { Container, Tipo, TitleCapa } from './style'

const Capa = () => {
  return (
    <Container style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div className="content">
          <Tipo>Italiana</Tipo>
          <TitleCapa>La Dolce Vita Trattoria</TitleCapa>
        </div>
      </div>
    </Container>
  )
}

export default Capa
