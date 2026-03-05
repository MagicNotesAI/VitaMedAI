import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../components/features/home/pages/HomePage'
import { Team } from '../components/features/team/pages/TeamPage'
import { HowItWorks } from '../components/features/how-it-works/pages/HowItWorksPage'
import { Service } from '../components/features/service/pages/ServicePage'
import ContactPage from '../components/features/contact/contact'
import { PrivacyPolicy } from '../components/features/privacy/pp'
import { TermsAndConditions } from '../components/features/privacy/term'

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