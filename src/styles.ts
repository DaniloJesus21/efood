import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#FFF',
  orange: '#E66767',
  bgPrimary: '#FFF8F2',
  bgSecondary: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bgPrimary};
    color: ${cores.orange};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
      width: 80%;
    }
  }
`

export default GlobalStyle
