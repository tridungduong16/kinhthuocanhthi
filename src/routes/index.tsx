import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import { ContactPage } from '@/pages/Contact'
import { DoctorPage } from '@/pages/Doctor'
import { FramesPage } from '@/pages/Frames'
import { HomePage } from '@/pages/Home'
import { NotFoundPage } from '@/pages/NotFound'
import { ServicesPage } from '@/pages/Services'
import { SEGMENTS } from '@/constants/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: SEGMENTS.HOME, element: <HomePage /> },
      { path: SEGMENTS.DOCTOR, element: <DoctorPage /> },
      { path: SEGMENTS.SERVICES, element: <ServicesPage /> },
      { path: SEGMENTS.FRAMES, element: <FramesPage /> },
      { path: SEGMENTS.CONTACT, element: <ContactPage /> },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
