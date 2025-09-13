import styled from 'styled-components'
import { cores } from '../../styles'

export const StyledFooter = styled.div`
  background-color: ${cores.bgSecondary};
  height: 298px;

  .container {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88px;
  padding: 32px 0 80px;
`

export const FooterDescription = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`
