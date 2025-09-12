import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.png'
import { HeaderBanner } from './styles'

const Header = () => (
  <HeaderBanner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <img src={logo} alt="Logo do Efood" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </div>
  </HeaderBanner>
)

export default Header
