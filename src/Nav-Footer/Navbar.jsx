import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/brand-logo.jpeg'

function Navbar () {
  return (
    <nav className=''>
      <div className='flex h-20 font-arial items-center px-27 justify-between font-medium'>
        <div className='w-55 -ml-11 '>
          <img src={logo} alt='brand logo' />
        </div>
        <div className=' flex gap-10 list-none w-fit  text-gray-700'>
          <Link
            to='/'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Home
          </Link>

          <Link
            to='about'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            About us
          </Link>

          <Link
            to='services'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Services
          </Link>
          <Link
            to='projects'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Our Projects
          </Link>

          <Link
            to='partners'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Our Partner
          </Link>
          <Link
            to='contact'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Contact us
          </Link>
          <Link
            to='join'
            className='transition hover:text-blue-600 cursor-pointer'
          >
            Join us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
