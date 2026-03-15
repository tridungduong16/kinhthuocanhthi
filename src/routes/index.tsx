import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import { DoctorPage } from '@/pages/Doctor'
import { HomePage } from '@/pages/Home'
import { NotFoundPage } from '@/pages/NotFound'
import { SEGMENTS } from '@/constants/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: SEGMENTS.HOME, element: <HomePage /> },
      { path: SEGMENTS.DOCTOR, element: <DoctorPage /> },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
