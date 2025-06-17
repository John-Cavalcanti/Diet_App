import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router-dom'
import { UsersInformationsProvider } from './contexts/user-informations'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UsersInformationsProvider>
        <GlobalStyle />
        <Outlet />
      </UsersInformationsProvider>
    </ThemeProvider>
  )
}

export default App
