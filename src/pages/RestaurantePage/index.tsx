import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import HeaderBar from '../../components/HeaderBar'
import Capa from '../../components/Capa'
import FoodCard from '../../components/FoodCard'

import type { Restaurante } from '../Home'

const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/eplay/jogos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('API:', data)
        setRestaurante(data)
      })
  }, [id])

  if (!restaurante) {
    return (
      <div className="container">
        <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <>
      <HeaderBar />
      <Capa restaurante={restaurante} />
      <FoodList>
        <FoodCard restaurante={restaurante} />
      </FoodList>
      <Footer />
    </>
  )
}

export default RestaurantePage
