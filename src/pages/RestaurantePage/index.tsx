import FoodList from '../../components/FoodList'
import type Food from '../../models/Food'

import italian from '../../assets/images/italian_restaurant.png'
import pizza from '../../assets/images/pizza.png'

const italianFood: Food[] = [
  {
    id: 1,
    image: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const RestaurantePage = () => {
  return (
    <>
      <img src={italian} alt="Italian Restaurant" />
      <FoodList foods={italianFood} />
    </>
  )
}

export default RestaurantePage
