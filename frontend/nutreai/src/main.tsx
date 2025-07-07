import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DietForm } from './pages/form/index.tsx'
import { Confirmation } from './pages/confirmation/index.tsx'
import { FormStepsProvider } from './contexts/form-steps-context.tsx'
import { LoginPage } from './pages/login/index.tsx'
import Home from './pages/home/index.tsx'
import { RouteNotFound } from './pages/route-not-found/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ThemeProvider theme={defaultTheme}><RouteNotFound /></ThemeProvider>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/weekly-diet-form',
        element: (
          <FormStepsProvider>
            <DietForm />
          </FormStepsProvider>
        )
      },
      {
        path: '/weekly-diet-confirmation',
        element: <Confirmation />
      },
    ]
  }
])

Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
