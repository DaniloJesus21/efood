import styled from 'styled-components'
import { LinkButton } from '../Button/styles'
import { breakpoints, cores } from '../../styles'

export const HeaderBanner = styled.header`
  width: 100%;
  height: 162px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 40px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Link = styled(LinkButton)`
  background-color: transparent;
  color: ${cores.orange};
  text-decoration: none;
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
`
