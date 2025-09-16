import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.main`
  padding: 80px 0;
  background-color: ${cores.bgPrimary};

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`
