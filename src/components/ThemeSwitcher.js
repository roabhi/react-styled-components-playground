import { Container } from './styled/Container.styled'
import Switcher from './Switcher'

const ThemeSwitcher = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Container align="right" hidemobile="true">
      <div>
        <Switcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </div>
    </Container>
  )
}

export default ThemeSwitcher
