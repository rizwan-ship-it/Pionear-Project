import React from 'react'
import logo from '../../assets/aboutImage/riyad.jpg'

function Components7 () {
  return (
    <div className='grid grid-cols-[2.5fr_1fr] gap-10 h-100 bg-gray-100'>
      <div>
        <div className=''>
          <img src={logo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium h-40 flex justify-center items-center px-10'>
          <p>
            Pioneer Projects Executer have signed project financing agreement
            with Riyad Bank.
          </p>
        </div>
      </div>
      <div>
        {/* <img src={""} alt='' className=' h-fit bg-cover bg-center' /> */}
      </div>
    </div>
  )
}

export default Components7
