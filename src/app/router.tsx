import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../features/home/pages/HomePage'
import { Team } from '../features/team/pages/TeamPage'
import { HowItWorks } from '../features/how-it-works/pages/HowItWorksPage'
import { Service } from '../features/service/pages/ServicePage'
import ContactPage from '../features/contact/contact'
import { PrivacyPolicy } from '../features/privacy/pp'
import { TermsAndConditions } from '../features/privacy/term'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/team',
    element: (
      <MainLayout>
        <Team />
      </MainLayout>
    ),
  },
  {
    path: '/how-it-works',
    element: (
      <MainLayout>
        <HowItWorks />
      </MainLayout>
    ),
  },
  {
    path: '/service',
    element: (
      <MainLayout>
        <Service />
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <ContactPage />
      </MainLayout>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <MainLayout>
        <PrivacyPolicy />
      </MainLayout>
    ),
  },
  {
    path: '/terms',
    element: (
      <MainLayout>
        <TermsAndConditions />
      </MainLayout>
    ),
  },
])