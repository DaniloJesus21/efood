import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${cores.orange};
  padding: 32px 8px;
  z-index: 1;
`

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`

export const Produto = styled.li`
  list-style: none;
  width: 344px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: ${cores.bgPrimary};
  color: ${cores.orange};
  position: relative;
`

export const ProdutoContent = styled.div`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`

export const Imagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const Icone = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  text-align: end;
  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const ValorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${cores.white};
  margin-bottom: 16px;
`

export const ButtonCompra = styled(ButtonContainer)`
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
`
