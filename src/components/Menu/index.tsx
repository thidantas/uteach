import Logo from 'assets/icons/Logo'
import Button from 'components/Button'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.LogoWrapper aria-label="site logo">
      <Logo />
    </S.LogoWrapper>

    <S.MenuNav>
      <S.MenuLink href="#" aria-label="go to products">
        Products
      </S.MenuLink>
      <S.MenuLink href="#" aria-label="go to solutions">
        Solutions
      </S.MenuLink>
      <S.MenuLink href="#" aria-label="go to pricing">
        Pricing
      </S.MenuLink>
    </S.MenuNav>

    <S.MenuGroup>
      <Button minimal color="outlined" aria-label="log in">
        Log In
      </Button>
      <Button color="outlined" aria-label="sign up now" semiBold>
        Sign Up Now
      </Button>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
