import RestauranteCard from '../RestauranteCard'
import Restaurante from '../../models/Restaurante'
import { Container } from './styles'

import japanese from '../../assets/images/japanese.jpg'
import italian from '../../assets/images/italian.jpg'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    image: japanese,
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da semana', 'Japonesa'],
    rating: 4.9
  },
  {
    id: 2,
    image: italian,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    rating: 4.6
  },
  {
    id: 3,
    image: italian,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    rating: 4.6
  },
  {
    id: 4,
    image: italian,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    rating: 4.6
  },
  {
    id: 5,
    image: italian,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    rating: 4.6
  },
  {
    id: 6,
    image: italian,
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    rating: 4.6
  }
]

const RestauranteList = () => {
  return (
    <Container>
      <div className="container">
        {restaurantes.map((restaurante) => (
          <RestauranteCard
            key={restaurante.id}
            id={restaurante.id}
            image={restaurante.image}
            name={restaurante.name}
            description={restaurante.description}
            info={restaurante.info}
            rating={restaurante.rating}
          />
        ))}
      </div>
    </Container>
  )
}

export default RestauranteList
