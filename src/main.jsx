import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Details } from './Pages/Details'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { Home } from './Pages/Home'
import { SingIn } from './Pages/SingIn'
import { SingUp } from './Pages/SingUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SingUp />
    </ThemeProvider>
  </React.StrictMode>
)
