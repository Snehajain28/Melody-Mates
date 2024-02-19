import React from 'react';
import { main_Carousel } from '../Data/main_Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const MainCarousel = () => {

    return (<div className='mx-auto sm:ml-[2rem] mb:w-[80vw] mb:h-[30vh] h-[25vh] w-[85vw] flex sm:w-[50vw] lg:ml-[10rem] md:ml-[2rem] mt-[70px] mb-10 xl:mt-[5rem] xl:ml-[10rem] xl:h-[15rem] xl:w-[30rem]'>
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img alt='' src={main_Carousel[0].img} /></SwiperSlide>
                <SwiperSlide><img alt='' src={main_Carousel[1].img} /></SwiperSlide>
                <SwiperSlide><img alt='' src={main_Carousel[2].img} /></SwiperSlide>
                <SwiperSlide><img alt='' src={main_Carousel[3].img} /></SwiperSlide>
                
            </Swiper>
        </>
    </div>
    )
};
export default MainCarousel;