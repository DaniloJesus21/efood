import styled from 'styled-components'
import Button from '../Button'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.orange};
  width: 472px;
  height: 398px;
  position: relative;
  margin: 0 auto;
`

export const StyledButton = styled(Button)``

export const FoodImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 24px;
  color: ${cores.white};
`

export const Description = styled.p`
  font-size: 16px;
  color: ${cores.white};
`
