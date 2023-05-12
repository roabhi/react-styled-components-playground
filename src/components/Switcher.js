import { useState } from 'react'
import { StyledSwitcher } from './styled/Switcher.styled'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'

const Switcher = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }

  return (
    <>
      <StyledSwitcher>
        <SunIcon />
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span />
        <MoonIcon />
      </StyledSwitcher>
    </>
  )
}

export default Switcher
