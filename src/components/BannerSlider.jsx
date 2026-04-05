import { styled } from '@mui/material/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341',
    },
  ]

  return (
    <SliderWrapper>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} style={{ width: '670px' }}>
            <BannerCard src={banner.image} alt={`banner-${banner.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  )
}

const SliderWrapper = styled('div')({
  width: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
})

const BannerCard = styled('img')({
  width: '100%',
  height: '486px',
  objectFit: 'cover',
  borderRadius: '10px',
})
