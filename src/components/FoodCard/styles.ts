import styled from 'styled-components'
import Button from '../Button'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.orange};
  width: 320px;
  height: 338px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledButton = styled(Button)``

export const FoodImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 16px;
  color: ${cores.white};
  font-weight: 900;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.white};
  font-weight: 400;
`
