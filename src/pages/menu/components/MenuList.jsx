import { Swiper, SwiperSlide } from "swiper/react"
import OurMenuCard from "@/components/shared/home/OurMenuCard"
import {  Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'

const MenuList = () => {
    return (
        <div className=" relative w-full">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={8}
                navigation
                loop
                className="flex gap-10 w-full">
                {
                    new Array(10).fill(0).map((item, i) => (
                        <SwiperSlide className="w-full" key={i} >
                            <div className="flex">
                                <OurMenuCard />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default MenuList