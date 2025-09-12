import styled from 'styled-components'
// import { cores } from '../../styles'

export const HeaderBanner = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 40px 0;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }
`
