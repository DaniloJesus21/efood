import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.png'
import { HeaderBanner, Link } from './styles'

const HeaderBar = () => (
  <HeaderBanner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Link type="link" to="/">
        Restaurantes
      </Link>
      <img src={logo} alt="Logo do Efood" />
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderBanner>
)

export default HeaderBar
