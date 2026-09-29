import React from 'react'
import Zamil1 from '../../assets/aboutImage/zameel1.jpg'
import Bama from '../../assets/aboutImage/bama.jpg'
import Zamil2 from '../../assets/aboutImage/zamil2.jpg'

function Components9 () {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-10 bg-gray-100'>
      <div>
        <div className='flex '>
          <img src={Zamil1} alt='brand-logo' className='h-20 m-5 px-5' />
          <img src={Bama} alt='brand-logo' className='h-20 m-5 px-5' />
          <img src={Zamil2} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 flex  h-60 mt-10 flex-col px-10'>
          <p>Pioneer Projects Executer have signed a supply agreement with:</p>
          <p>- Zamil Steel Company.</p>
          <p>- Bamardouf Decoration Company.</p>
          <p>- Zamil Air Conditioners Company.</p>
        </div>
      </div>
      <div>
        {/* <img src={''} alt='' className=' h-fit object-cover ' /> */}
      </div>
    </div>
  )
}

export default Components9
