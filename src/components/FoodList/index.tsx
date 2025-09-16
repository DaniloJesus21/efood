import type { JSX } from 'react'
// import FoodCard from '../FoodCard'
import { Container } from './styles'

export type Props = {
  children: JSX.Element
}

const FoodList = ({ children }: Props) => {
  return (
    <Container>
      <div className="container">{children}</div>
    </Container>
  )
}

export default FoodList
