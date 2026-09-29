import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import Components1 from './Components/Components1'
import Components2 from './Components/Components2'
import Components3 from './Components/Components3'
import Components4 from './Components/Components4'
import Components5 from './Components/Components5'
import Components6 from './Components/Components6'
import Components7 from './Components/Components7'
import Components8 from './Components/Components8'
import Components9 from './Components/Components9'
import Components10 from './Components/Components10'

function HomeSlider () {
  return (
    <Swiper
      modules={[Autoplay]}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000
      }}
    >
      <SwiperSlide>
        <Components1 />
      </SwiperSlide>

      <SwiperSlide>
        <Components2 />
      </SwiperSlide>

      <SwiperSlide>
        <Components3 />
      </SwiperSlide>

      <SwiperSlide>
        <Components4 />
      </SwiperSlide>

      <SwiperSlide>
        <Components5 />
      </SwiperSlide>

      <SwiperSlide>
        <Components6 />
      </SwiperSlide>

      <SwiperSlide>
        <Components7 />
      </SwiperSlide>

      <SwiperSlide>
        <Components8 />
      </SwiperSlide>

      <SwiperSlide>
        <Components9 />
      </SwiperSlide>

      <SwiperSlide>
        <Components10 />
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeSlider
