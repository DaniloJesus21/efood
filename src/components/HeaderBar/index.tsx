import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.png'
import { HeaderBanner, Link } from './styles'

import { open } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'

const HeaderBar = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBanner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Link type="link" to="/">
          Restaurantes
        </Link>
        <img src={logo} alt="Logo do Efood" />
        <Link onClick={openCart} type="link" to="#">
          {items.items.length} produto(s) no carrinho
        </Link>
      </div>
    </HeaderBanner>
  )
}

export default HeaderBar
