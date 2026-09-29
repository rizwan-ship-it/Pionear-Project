import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Nav-Footer/Footer'
import Navbar from '../Nav-Footer/Navbar'

function MainLayout () {
  return (
    <div className='px-30 '>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
