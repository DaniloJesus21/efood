import { useParams } from 'react-router-dom'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import Capa from '../../components/Capa'

import { useGetRestauranteQuery } from '../../services/api'

const RestaurantePage = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return (
      <div className="container">
        <h2>Carregando...</h2>
      </div>
    )
  }

  return (
    <>
      <HeaderBar />
      <Capa restaurante={restaurante} />
      <FoodList cardapio={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default RestaurantePage
