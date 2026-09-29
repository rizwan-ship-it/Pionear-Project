import React from 'react'
import Logo from '../../assets/about-image/regus.jpg'
import image5 from '../../assets/about-image/image5.jpg'

function Components5 () {
  return (
    <div className='grid grid-cols-[1fr_1fr] gap-10 bg-gray-100'>
      <div>
        {' '}
        <div className=''>
          <img src={Logo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 flex  h-50 justify-center flex-col px-10'>
          <p>
            Pioneer Projects Executer have successfully executed Regus at the
            esplanade, Riyadh with 2150 sqm area in 2.5 months duration.
          </p>
        </div>
      </div>
      <div>
        <img src={image5} alt='image' className=' h-fit bg-contain bg-center' />
      </div>
    </div>
  )
}

export default Components5
