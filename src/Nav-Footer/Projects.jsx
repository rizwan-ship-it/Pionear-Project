import React from 'react'
import { Link } from 'react-router-dom'

function Projects () {
  return (
    <div>
      <div className='flex top-0 h-10 gap-10 bg-gray-100 list-none items-center justify-center font-medium'>
        <Link to='food-beverage' className='hover:text-blue-800 cursor-pointer'>
          Food & Beverage
        </Link>
        <Link to='corporate' className='hover:text-blue-800 cursor-pointer'>
          Corporate office
        </Link>
        <Link to='retail' className='hover:text-blue-800 cursor-pointer'>
          Retail
        </Link>
        <Link to='industrial' className='hover:text-blue-800 cursor-pointer'>
          Industrial
        </Link>
        <Link to='healthcare' className='hover:text-blue-800 cursor-pointer'>
          HealthCare
        </Link>
        <Link to='hotels' className='hover:text-blue-800 cursor-pointer'>
          Hospitality & Hotels
        </Link>
      </div>
    </div>
  )
}

export default Projects
