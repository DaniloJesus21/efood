import logo from '../../assets/images/logo.png'
import facebookLogo from '../../assets/images/facebook_logo.png'
import twitterLogo from '../../assets/images/twitter_logo.png'
import instagramLogo from '../../assets/images/instagram_logo.png'
import { FooterDescription, SocialLinks, StyledFooter } from './styles'

const Footer = () => (
  <>
    <StyledFooter>
      <div className="container">
        <img src={logo} alt="Logo do Efood" />
        <SocialLinks>
          <img src={instagramLogo} alt="Logo do Instagram" />
          <img src={facebookLogo} alt="Logo do Facebook" />
          <img src={twitterLogo} alt="Logo do Twitter" />
        </SocialLinks>
        <FooterDescription>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </FooterDescription>
      </div>
    </StyledFooter>
  </>
)

export default Footer
