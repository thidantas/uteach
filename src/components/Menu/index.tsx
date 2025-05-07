import Logo from 'assets/icons/Logo'

import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import NavDrawerIcon from '@/assets/icons/NavDrawer'

const Menu = () => (
  <S.Wrapper>
    <S.LogoWrapper aria-label="site logo">
      <Logo />
    </S.LogoWrapper>

    <MediaMatch greaterThan="medium">
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
    </MediaMatch>

    <S.MenuGroup>
      <MediaMatch greaterThan="medium">
        <S.MenuGroupButtons>
          <Button minimal color="outlined" aria-label="log in">
            Log In
          </Button>
          <Button color="outlined" aria-label="sign up now" semiBold>
            Sign Up Now
          </Button>
        </S.MenuGroupButtons>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.NavDrawerWrapper>
          <S.CustomDrawerButton
            icon={<NavDrawerIcon />}
            position="left"
            minimal
          >
            {/* Insert full menu logic here */}
          </S.CustomDrawerButton>
        </S.NavDrawerWrapper>
      </MediaMatch>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
