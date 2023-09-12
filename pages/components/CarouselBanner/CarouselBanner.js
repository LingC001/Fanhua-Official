import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import style from '@/pages/components/CarouselBanner/index.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const CarouselBanner = () => {
  return (
    <Swiper
      className={style.mySwiper}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true, type: 'bullets' }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Image
          src={'/images/swiper/study.jpg'}
          alt={'base'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={style['swiper-image']}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/images/swiper/base.jpg'}
          alt={'base'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={style['swiper-image']}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/images/swiper/entry.jpg'}
          alt={'base'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={style['swiper-image']}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default CarouselBanner
