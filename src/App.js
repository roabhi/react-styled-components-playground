import { ThemeProvider } from 'styled-components'

import content from './data/content'

import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styled/Container.styled'
import GlobalStyles from './components/styled/Global'

const theme = {
  colors: {
    header: `#ebfbff`,
    body: '#fff',
    footer: '#003333',
  },
  mobile: '48rem',
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
