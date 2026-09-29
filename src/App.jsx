import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import OurPartners from './Pages/OurPartners'
import OurProjects from './Pages/OurProjects'
import Contact from './Pages/Contact'
import JoinUs from './Pages/JoinUs'
// ======================Our Project Components=========================================
import FoodBeverage from '../src/Our-Projects/FoodBeverage'
import Retail from '../src/Our-Projects/Retail'
import Industrial from '../src/Our-Projects/Industrial'
import Healthcare from '../src/Our-Projects/Healthcare'
import HospitalityHotels from '../src/Our-Projects/HospitalityHotels'
import CorporateOffice from './Our-Projects/CorporateOffice'
import Zooba from './components/home/Zooba'
import Mo from './components/home/Mo'
import RCU from './components/home/RCU'
import Cosmo from './components/home/Cosmo'

function App () {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        //==================== Home page Childrens Components starts====================
        {
          path: 'zooba',
          element: <Zooba />
        },
        {
          path: 'mo',
          element: <Mo />
        },
        {
          path: 'rcu',
          element: <RCU />
        },
        {
          path: 'cosmo',
          element: <Cosmo />
        },
        // =====================================Home Page childrens Components end ==================================
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'projects',
          element: <OurProjects />,
          children: [
            {
              path: 'food-beverage',
              element: <FoodBeverage />
            },
            {
              path: 'corporate',
              element: <CorporateOffice />
            },
            {
              path: 'retail',
              element: <Retail />
            },
            {
              path: 'industrial',
              element: <Industrial />
            },
            {
              path: 'healthcare',
              element: <Healthcare />
            },
            {
              path: 'hotels',
              element: <HospitalityHotels />
            }
          ]
        },
        {
          path: 'partners',
          element: <OurPartners />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'join',
          element: <JoinUs />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
