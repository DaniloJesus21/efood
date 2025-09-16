import FoodCard from '../FoodCard'
import { Container } from './styles'
import type { Prato } from '../../pages/Home'

const FoodList = ({ cardapio }: { cardapio: Prato[] }) => {
  return (
    <Container>
      <div className="container">
        {cardapio.map((prato) => (
          <FoodCard key={prato.id} prato={prato} />
        ))}
      </div>
    </Container>
  )
}

export default FoodList
