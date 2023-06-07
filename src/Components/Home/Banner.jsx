import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const Banner = () => {


    return (
        <section className="container">

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true} modules={[Navigation]} loop={true}
            >
                <SwiperSlide> <img src="https://i.ibb.co/LCgYJHJ/0c355d4a-007c-482c-903b-cf533c773914-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                
                
            </Swiper>
        </section>
    );
};

export default Banner;