import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DietForm } from './pages/form/index.tsx'
import { Confirmation } from './pages/confirmation/index.tsx'
import { MyPlans } from './pages/myplans/index.tsx' 
import { FormStepsProvider } from './contexts/form-steps-context.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
      {
        path: '/myplans',
        element: <MyPlans />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
