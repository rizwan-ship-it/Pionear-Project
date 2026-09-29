import React from 'react'
import image8 from '../../assets/about-image/image8.jpg'

function Components8 () {
  return (
    <div className='grid grid-cols-[1.5fr_1fr] gap-10  h-100 bg-gray-100'>
      <div>
        <div className=''>
          {/* <img src={logo} alt='brand-logo' className='h-20 m-5 px-5' /> */}
        </div>
        <div className='text-blue-950 font-medium gap-3 flex  h-100 justify-center flex-col px-10'>
          <p>
            كرّم سمو أميرالشرقية شركة رواد تنفيذ المشاريع على دعمها لـجمعية
            السرطان السعودية ممثلاً بسعادة الأستاذ محمد بن عبدالوهاب الزامل عضو
            مجلس الإدارة ومدير الصندوق.
          </p>
        </div>
      </div>
      <div>
        <img src={image8} alt='image' className=' h-100 object-cover ' />
      </div>
    </div>
  )
}

export default Components8
