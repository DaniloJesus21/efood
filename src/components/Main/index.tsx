import japanese from '../../assets/images/japanese_restaurant.png'
import italian from '../../assets/images/italian_restaurant.png'
import estrela from '../../assets/images/estrela.png'

import {
  StyledMain,
  Card,
  CardImage,
  CardContent,
  Tag,
  Tags,
  TitleContainer,
  Title,
  Rating,
  Link,
  CardDescription
} from './styles'

const restaurantes = [
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

const Main = () => {
  return (
    <>
      <StyledMain>
        <div className="container">
          {restaurantes.map((restaurant) => (
            <Card key={restaurant.id}>
              <CardImage src={restaurant.image} alt={restaurant.name} />
              <Tags>
                {restaurant.info.map((info) => (
                  <Tag key={info}>{info}</Tag>
                ))}
              </Tags>
              <CardContent>
                <TitleContainer>
                  <Title>{restaurant.name}</Title>
                  <Rating>
                    <p>{restaurant.rating}</p>
                    <img src={estrela} alt="Estrela" />
                  </Rating>
                </TitleContainer>
                <CardDescription>{restaurant.description}</CardDescription>
                <Link href="#">Saiba mais</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </StyledMain>
    </>
  )
}

export default Main
