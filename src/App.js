import { ThemeProvider } from 'styled-components'

import content from './data/content'

import Header from './components/Header'
import ThemeSwitcher from './components/ThemeSwitcher'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styled/Container.styled'
import GlobalStyles from './components/styled/Global'

import { useState } from 'react'

const lightTheme = {
  colors: {
    header: `#ebfbff`,
    body: '#fff',
    footer: '#003333',
    color: '#000',
    cardBg: '#fff',
  },
  mobile: '48rem',
  logo: './images/logo.svg',
}

const darkTheme = {
  colors: {
    header: '#282B32',
    body: '#19191A',
    footer: 'rgba(0,23,37,50%)',
    color: '#fff',
    cardBg: '#1e1e1e',
  },
  mobile: '48rem',
  logo: './images/logo_for_dark.svg',
}

const App = () => {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
