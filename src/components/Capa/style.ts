import { cores } from '../../styles'
import { Title } from './../RestauranteCard/styles'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 100%;
    background-color: #000000a7;
    width: 100%;
    height: 100%;
  }

  .content {
    margin: 0 auto;
    width: 1024px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px 0;
  }
`

export const TitleCapa = styled(Title)`
  color: ${cores.white};
  font-size: 32px;
`

export const Tipo = styled.p`
  color: #707070ff;
  font-size: 32px;
`
