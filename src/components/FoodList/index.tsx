import FoodCard from '../FoodCard'
import Food from '../../models/Food'
import { Container } from './styles'

export type Props = {
  foods: Food[]
}

const FoodList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            image={food.image}
            name={food.name}
            description={food.description}
          />
        ))}
      </div>
    </Container>
  )
}

export default FoodList
