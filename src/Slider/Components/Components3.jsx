import React from 'react'
import TarmeenLogo from '../../assets/about-image/Tarmeen-logo.jpg'
import image3 from '../../assets/about-image/image3.jpg'

function Components3 () {
  return (
    <div className='grid grid-cols-[1fr_1fr] gap-10m h-100 bg-gray-100'>
      <div>
        {' '}
        <div className=''>
          <img src={TarmeenLogo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 flex flex-col h-50 px-10 justify-center items-center'>
          <p>
            ​كرّم صاحب السمو الملكي سعود بن بندر بن عبدالعزيز آل سعود ⁧‫نائب
            أمير الشرقية‬⁩ المدير التنفيذي لشركة رواد تنفيذ المشاريع أ. محمد بن
            عبدالوهاب الزامل خلال حفل تكريم شركاء النجاح لجمعية ترميم، وذلك نظير
            مشاركتها في مبادرة #بيت_يشيل_بيت
          </p>
        </div>
      </div>
      <div>
        <img src={image3} alt='image' className=' h-100 object-contain w-full ' />
      </div>
    </div>
  )
}

export default Components3
