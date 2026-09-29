import React from 'react'
import image4 from '../../assets/about-image/image4.jpg'

function Components4 () {
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-10 bg-gray-100'>
      <div className='text-blue-950 font-medium gap-3 flex flex-col px-10 h-100 justify-center'>
        <p>
          Tamairah Company (one of the sister companies of Pioneer Projects
          Executer) has signed an agreement for distribution to Hagleitner
          Company in Saudi Arabia. The CEO, Saad F. AlSaleh, and the founding
          partner, Mohammed A. AlZamil, said that signing this agreement is an
          extension of the confidence of international companies in the Saudi
          market and hospitality.
        </p>
        
        <p>
          قامت شركة تَميرَة، أحد الشركات الشقيقة لشركة رواد تنفيذ المشاريع
          بتوقيع اتفاقية للتوزيع لشركة هاجلتنر في السعودية. و اوضح الرئيس
          التنفيذي سعد بن فايق الصالح و الشريك المؤسس محمد بن عبدالوهاب الزامل
          عن أن توقيع هذه الاتفاقية يعتبر امتدادًا لثقة الشركات العالمية في
          السوق السعودي، و أوضح ان انضمام هاجلتنر لعائلة تميرة يؤكد على مركزها
          بالسوق السعودي كأحد الشركات الرائدة في توفير الحلول المبتكرة لقطاع
          الفندقة و الضيافة.
        </p>
      </div>
      <div>
        <img src={image4} alt='image' className=' h-100 object-contain w-full'/>
      </div>
    </div>
  )
}

export default Components4
