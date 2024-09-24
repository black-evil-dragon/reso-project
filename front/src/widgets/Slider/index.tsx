import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import '@styles/widgets/slider.scss'


interface SliderProps {
    type?: 'banner' | 'slider'
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ type='banner', images }) => {
    return (
        <>
            <div className={`slider --${type}`}>
                <Swiper
                    modules={
                        [

                        ]
                    }
                    slidesPerView={1}
                    loop={true}
            
                    // spaceBetween={30}
                    // effect={'fade'}
                    // navigation
                    // pagination={{ clickable: true }}
                    // autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className='slider__wrapper'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className='slider__slide'>
                            <div className="slide">
                                <div className="slide__content">
                                    <div className="slide__title">
                                        Оформить страховой полис быстро и удобно
                                    </div>
                                    <div className="slide__subtitle">
                                        Доставка полисов и вызов агента - бесплатно. Оставьте заявку или позвоните нам!
                                    </div>
                                </div>
                                <div className="slide__image">
                                    <img src={image} alt={`Слайд`} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Slider;