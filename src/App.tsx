import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'

import { GlobalStyle } from './styles'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
