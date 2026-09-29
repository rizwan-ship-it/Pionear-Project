import React from 'react'
import logo from '../../assets/aboutImage/mudaraba.jpg'
import image6 from '../../assets/aboutImage/image6.jpg'
function Components6 () {
  return (
    <div className='grid grid-cols-[1fr_1fr] justify-between gap-10 h-100 bg-gray-100'>
      <div>
        <div className=''>
          <img src={logo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 flex  h-50 justify-center flex-col px-10'>
          <p>
            Pioneer Projects Executer have signed a joint memorandum with
            Mudaraba Financial Company.
          </p>
        </div>
      </div>
      <div>
        <img src={image6} alt='image' className=' h-100 object-contain w-full' />
      </div>
    </div>
  )
}

export default Components6
