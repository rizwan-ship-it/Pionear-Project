import React from 'react'
import image1 from '../../assets/aboutImage/image1.jpg'
import ESAB from '../../assets/aboutImage/esab.jpg'
function Components1 () {
  return (
    <div className='grid grid-cols-2 gap-10 h-100 bg-gray-100'>
      <div>
        <div className=''>
          <img src={ESAB} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 h-100 flex flex-col px-10'>
          <p>
            We are pleased to announce the successful completion and official
            opening of ESAB’s new manufacturing facility in Al Ahsa, Saudi
            Arabia.
          </p>
          <p>
            Pioneer Projects Executer (PPE) is proud to have played a key role
            in delivering this significant industrial development. Our
            involvement reflects our continued commitment to supporting Saudi
            Arabia’s strategic vision for industrial growth and local
            manufacturing excellence.
          </p>
          ​
          <p>
            We extend our congratulations to ESAB and look forward to
            contributing to more impactful projects across the Kingdom.
          </p>
        </div>
      </div>
      <div className='object-fill bg-cover '>
        <img src={image1} alt='image' className='h-100 object-contain' />
      </div>
    </div>
  )
}

export default Components1
