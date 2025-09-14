import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.png'
import { LinkButton } from '../Button/styles'
import { HeaderBanner } from './styles'

const HeaderBar = () => (
  <HeaderBanner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <LinkButton type="link" to="/">
        Restaurantes
      </LinkButton>
      <img src={logo} alt="Logo do Efood" />
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderBanner>
)

export default HeaderBar
