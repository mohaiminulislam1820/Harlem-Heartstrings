import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const Banner = () => {


    return (
        <section className="container text-white">

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true} modules={[Navigation]} loop={true}
            >
                <SwiperSlide className='bg-slider-1 rounded-lg bg-cover'>
                    <div className='flex flex-col items-center justify-center h-[calc(100vh-200px)] container'>
                        <h1 className='section-title mb-8'> Learn to play the violin</h1>

                        <p className=' text-gray-300 container'>Whether you are a beginner or an intermediate player, we have the perfect violin class for you. Join our friendly and professional instructors and discover the joy of music.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='bg-slider-2 rounded-lg bg-cover'>
                    <div className='flex flex-col items-center justify-center h-[calc(100vh-200px)] container'>
                        <h1 className='section-title mb-8'> Join Our Violin Community </h1>

                        <p className=' text-gray-300 container'>At Harlem Heartstrings, you will not only learn to play the violin, but also meet other like-minded people who share your passion. Enjoy our group classes, workshops, and recitals and have fun while learning.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='bg-slider-3 rounded-lg bg-cover'>
                    <div className='flex flex-col items-center justify-center h-[calc(100vh-200px)] container'>
                        <h1 className='section-title mb-8'> Showcase Your Talent</h1>

                        <p className=' text-gray-300 container'>Harlem Heartstrings will help you develop your skills and prepare you for any performance opportunity. Whether you want to play for your family, friends, or a larger audience, we will guide you every step of the way.</p>
                    </div>

                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Banner;