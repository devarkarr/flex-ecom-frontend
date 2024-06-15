import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay ,Parallax} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'

const Carousel = () => {
    return (
        <div className='relative my-5 md:my-10 '>
            <Swiper
                className='lg:h-[25rem]'
                modules={[Navigation,Autoplay,Parallax]}
                autoplay
                parallax
                spaceBetween={40}
                slidesPerView={1}
                navigation
                loop
            >
                <SwiperSlide>
                    <div className='w-full'>
                        <img src="/src/assets/images/carousel/slider_one-cover.png" className='w-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full'>
                        <img src="/src/assets/images/carousel/slider_two-cover.png" className='w-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full'>
                        <img src="/src/assets/images/carousel/slider_three-cover.png" className='w-full' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel