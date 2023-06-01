import React from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
