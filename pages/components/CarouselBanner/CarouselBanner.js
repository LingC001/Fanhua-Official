import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import style from '@/pages/components/CarouselBanner/index.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const CarouselBanner = () => {
  const images = [
    '/images/swiper/study.jpg',
    '/images/swiper/base.jpg',
    '/images/swiper/entry.jpg',
    '/images/filed/filed-1.jpg',
    '/images/filed/filed-2.jpg',
  ]

  return (
    <Swiper
      className={style.mySwiper}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true, type: 'bullets' }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {images.map((item, index) => (
        <SwiperSlide key={item}>
          <Image
            src={item}
            alt={'base'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={style['swiper-image']}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarouselBanner
