import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styled/SocialIcons.styled'
// import { Flex } from './styled/Flex.styled'

const SocialIcons = () => {
  return (
    // <Flex align="top">
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
    // </Flex>
  )
}

export default SocialIcons
