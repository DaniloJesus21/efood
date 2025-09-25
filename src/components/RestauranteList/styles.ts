import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.main`
  padding: 80px 0;
  background-color: ${cores.bgPrimary};

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
    }
  }
`
