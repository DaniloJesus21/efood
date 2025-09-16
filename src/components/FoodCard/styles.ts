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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .container {
    margin: 0 auto;
  }
`

export const CardModal = styled.div`
  background-color: ${cores.orange};
  width: 1024px;
  height: 338px;
  padding: 0 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  position: relative;
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const MainModal = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`

export const ContentModal = styled.div`
  gap: 16px;
  height: 100%;

  ${Title} {
    margin-bottom: 16px;
    font-size: 18px;
  }

  ${Description} {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const ImgModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`
