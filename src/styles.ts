import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#FFF',
  orange: '#E66767',
  bgPrimary: '#FFF8F2',
  bgSecondary: '#FFEBD9'
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
  }
`

export default GlobalStyle
