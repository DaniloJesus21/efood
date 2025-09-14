import FoodList from '../../components/FoodList'
// import Food from '../../models/Food'
// import pizza from '../../assets/images/pizza.png'

import HeaderBar from '../../components/HeaderBar'

// const italianFoods: Food[] = [
//   {
//     id: 1,
//     image: pizza,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
//   }
// ]

const RestaurantePage = () => {
  return (
    <>
      <HeaderBar />
      <FoodList />
      {/* <h1>Teste</h1> */}
    </>
  )
}

export default RestaurantePage
