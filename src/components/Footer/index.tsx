import Link from 'next/link'

import Logo from 'assets/icons/Logo'
import Eur from 'assets/icons/Eur'
import Globe from 'assets/icons/Globe'
import ArrowRight from 'assets/icons/ArrowRight'
import Accessibility from 'assets/icons/Accessibility'
import Button from 'components/Button'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.FooterLinksArea>
      <S.LogoWrapper>
        <Logo invertFill />
      </S.LogoWrapper>

      <S.NavContent>
        <S.Column aria-labelledby="product-heading">
          <S.Header id="product-heading">Product</S.Header>

          <S.Nav>
            <Link href="#">Pricing</Link>
            <Link href="#">Overview</Link>
            <Link href="#">Browse</Link>
            <Link href="#">Accessibility</Link>
          </S.Nav>
        </S.Column>

        <S.Column aria-labelledby="solutions-heading">
          <S.Header id="solutions-heading">Soluctions</S.Header>

          <S.Nav>
            <Link href="#">Brainstorming</Link>
            <Link href="#">Ideation</Link>
            <Link href="#">Wireframing</Link>
            <Link href="#">Research</Link>
          </S.Nav>
        </S.Column>

        <S.Column aria-labelledby="resources-heading">
          <S.Header id="resources-heading">Resources</S.Header>

          <S.Nav>
            <Link href="#">Help Center</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Tutorials</Link>
            <Link href="#">FAQS</Link>
          </S.Nav>
        </S.Column>

        <S.Column aria-labelledby="support-heading">
          <S.Header id="support-heading">Support</S.Header>

          <S.Nav>
            <Link href="#">Contact Us</Link>
            <Link href="#">Developers</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">Integration</Link>
          </S.Nav>
        </S.Column>

        <S.Column aria-labelledby="company-heading">
          <S.Header id="company-heading">Company</S.Header>

          <S.Nav>
            <Link href="#">About</Link>
            <Link href="#">Press</Link>
            <Link href="#">Events</Link>
            <Button icon={<ArrowRight />} minimal as="a" href="#">
              Request Demo
            </Button>
          </S.Nav>
        </S.Column>
      </S.NavContent>
    </S.FooterLinksArea>

    <S.Divider />

    <S.WrapperCopyright>
      <S.Copyright>uteach @ 2025. All rights reserved.</S.Copyright>

      <S.SupportSection>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Contact</Link>
        <Button
          minimal
          as="a"
          href="#"
          icon={
            <S.WrapperIcon>
              <Globe />
            </S.WrapperIcon>
          }
          position="left"
        >
          EN
        </Button>
        <Button
          minimal
          as="a"
          href="#"
          icon={
            <S.WrapperIcon>
              <Eur />
            </S.WrapperIcon>
          }
          position="left"
        >
          EUR
        </Button>
        <Button
          minimal
          as="a"
          href="#"
          icon={
            <S.WrapperIcon>
              <Accessibility />
            </S.WrapperIcon>
          }
        />
      </S.SupportSection>
    </S.WrapperCopyright>
  </S.Wrapper>
)

export default Footer
