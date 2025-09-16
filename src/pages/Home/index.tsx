import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <>
      <Header />
      <RestauranteList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
