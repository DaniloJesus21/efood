import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'

import { useGetRestaurantesQuery } from '../../services/api'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return (
      <div className="container">
        <h2>Carregando...</h2>
      </div>
    )
  }

  return (
    <>
      <Header />
      <RestauranteList restaurantes={restaurantes || []} />
      <Footer />
    </>
  )
}

export default Home
