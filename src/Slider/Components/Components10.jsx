import React from 'react'
import logo from '../../assets/aboutImage/saarland10.jpg'
import image10 from '../../assets/aboutImage/image10.jpg'

function Components10 () {
  return (
    <div className='grid grid-cols-[1.5fr_1fr] gap-10 h-100 bg-gray-100'>
      <div>
        <div className=''>
          <img src={logo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-2 flex  h-60 justify-center flex-col px-10'>
          <p>
            We are thrilled to announce that PPE has successfully acquired the
            Integrated Management System ISO Certification for ISO 9001 (Quality
            Management), ISO 14001 (Environmental Management), and ISO 45001
            (Occupational Health and Safety Management).
          </p>
          <p>
            This achievement reflects our unwavering commitment to excellence,
            sustainability, and the well-being of our employees and
            stakeholders.
          </p>
          <p>
            Thank you to everyone who contributed to this milestone! Together,
            we continue to set higher standards for our industry.
          </p>
        </div>
      </div>
      <div>
        <img src={image10} alt='image' className=' h-100 object-contain ' />
      </div>
    </div>
  )
}

export default Components10
