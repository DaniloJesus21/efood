import { ButtonContainer, LinkButton } from './styles'

type Props = {
  type: 'link' | 'button'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, to, children, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <LinkButton type="link" to={to as string}>
      {children}
    </LinkButton>
  )
}

export default Button
