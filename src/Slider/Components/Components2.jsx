import React from 'react'
import Logo from '../../assets/aboutImage/greatFuture.jpg'
import image2 from '../../assets/aboutImage/image2.jpg'

function Components2 () {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-10 h-100 bg-gray-100'>
      <div>
        {' '}
        <div className=''>
          <img src={Logo} alt='brand-logo' className='h-20 m-5 px-5' />
        </div>
        <div className='text-blue-950 font-medium gap-3 h-100 flex flex-col px-10'>
          <p>
            Pioneer Projects Executer signed a memorandum of understanding with
            the UK company I-AM during the Great Futures Initiative Conference,
            with the aim of providing design services in the Kingdom of Saudi
            Arabia, and actively participating in developing the quality of the
            user environment for future projects.
          </p>
          <p>
            شركة رواد تنفيذ المشاريع توقع مذكرة تفاهم مع شركة I-AM البريطانية
            خلال مؤتمر Great Futures بهدف تقديم خدمات التصميم في المملكة العربية
            السعودية، والمشاركة الفعالة في تطوير جودة بيئة المستخدم للمشاريع
            المستقبلية
          </p>
        </div>
      </div>
      <div>
        <img src={image2} alt='image' className=' h-100  object-contain' />
      </div>
    </div>
  )
}

export default Components2
