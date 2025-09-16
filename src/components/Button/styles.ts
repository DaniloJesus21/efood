import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  display: inline-block;
  background-color: ${cores.bgSecondary};
  color: ${cores.orange};
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
  border: none;
`

export const LinkButton = styled(Link)`
  display: inline-block;
  background-color: ${cores.orange};
  color: ${cores.white};
  text-decoration: none;
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
`
