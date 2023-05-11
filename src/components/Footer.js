import { Container } from './styled/Container.styled'
import SocialIcons from './SocialIcons'
import { Flex } from './styled/Flex.styled'
import { StyledFooter } from './styled/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex align="top">
          <ul>
            <li>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </span>
            </li>
            <li>
              <span>+1-543-123-4567</span>
            </li>
            <li>
              <span>example@huddle.com</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>About Us</span>
            </li>
            <li>
              <span>What We Do</span>
            </li>
            <li>
              <span>FAQ</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Career</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
