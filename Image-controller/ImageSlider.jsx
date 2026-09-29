import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import image1 from '../src/assets/imageSlider/image1.png'
import image2 from '../src/assets/imageSlider/image2.png'
import image3 from '../src/assets/imageSlider/image3.png'
import image4 from '../src/assets/imageSlider/image4.png'
import image5 from '../src/assets/imageSlider/image5.png'
import image6 from '../src/assets/imageSlider/image6.png'
import image7 from '../src/assets/imageSlider/image7.png'
import image8 from '../src/assets/imageSlider/image8.png'
import image9 from '../src/assets/imageSlider/image9.png'
import image10 from '../src/assets/imageSlider/image10.png'
import image11 from '../src/assets/imageSlider/image11.png'
import image12 from '../src/assets/imageSlider/image12.png'
import image13 from '../src/assets/imageSlider/image13.png'
import image14 from '../src/assets/imageSlider/image14.png'
import image15 from '../src/assets/imageSlider/image15.png'
import image16 from '../src/assets/imageSlider/image16.png'
import image17 from '../src/assets/imageSlider/image17.png'
import image18 from '../src/assets/imageSlider/image18.png'
import image19 from '../src/assets/imageSlider/image19.png'
import image20 from '../src/assets/imageSlider/image20.png'
import image21 from '../src/assets/imageSlider/image21.png'
import image22 from '../src/assets/imageSlider/image22.png'
import image23 from '../src/assets/imageSlider/image23.png'
import image24 from '../src/assets/imageSlider/image24.png'
import image25 from '../src/assets/imageSlider/image25.png'
import image26 from '../src/assets/imageSlider/image26.png'
import image27 from '../src/assets/imageSlider/image27.png'
import image28 from '../src/assets/imageSlider/image28.png'
import image29 from '../src/assets/imageSlider/image29.png'
import image30 from '../src/assets/imageSlider/image30.png'
import image31 from '../src/assets/imageSlider/image31.png'
import image32 from '../src/assets/imageSlider/image32.png'
import image33 from '../src/assets/imageSlider/image33.png'
import image34 from '../src/assets/imageSlider/image34.png'
import image35 from '../src/assets/imageSlider/image35.png'
import image36 from '../src/assets/imageSlider/image36.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './ImageSlider.css'

function ImageSlider () {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36
  ]

  return (
    <div>
      <Swiper
        className=' mySwiper flex items-center justify-center w-10/12! mx-auto'
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
          // type: 'fraction'
        }}
        navigation={true}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className=' h-full flex items-center justify-center'
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-center'
            />
          </SwiperSlide>
        ))}
        <div className='bg-blue-950 text-white font-medium text-xl py-5'>
          <h1 className='px-4'>Building Relationships Lasting a Lifetime</h1>
        </div>
      </Swiper>
    </div>
  )
}

export default ImageSlider
