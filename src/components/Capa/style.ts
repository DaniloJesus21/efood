import { cores } from '../../styles'
import { Title } from './../RestauranteCard/styles'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  .content {
    margin: 0 auto;
    width: 1024px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 24px 0;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

export const TitleCapa = styled(Title)`
  color: ${cores.white};
  font-size: 32px;
  font-weight: 900;
`

export const Tipo = styled.p`
  color: ${cores.white};
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
`
