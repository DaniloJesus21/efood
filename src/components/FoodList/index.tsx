import FoodCard from '../FoodCard'
import type { Food } from '../../models/Food'
import { Container } from './styles'

import pizza from '../../assets/images/pizza.png'

const foods: Food[] = Array(6)
  .fill({
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  })
  .map((food, index) => ({ ...food, id: index + 1 }))

const FoodList = () => {
  return (
    <Container>
      <div className="container">
        {foods.map((food) => (
          <>
            <FoodCard
              key={food.id}
              image={food.image}
              name={food.name}
              description={food.description}
            />
          </>
        ))}
      </div>
    </Container>
  )
}

// const FoodList = () => {
//   return (
//     <>
//       <h1>Teste</h1>
//     </>
//   )
// }

export default FoodList
