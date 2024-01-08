import React from 'react'
import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'

const Developer = ({videos, title, id}) => {
  return (
    <section className={id}>
        <h2>{title}</h2>
        <div className='developer-inner'>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                navigation={true}
                // centeredSlides={true} //활성화된 슬라이드 가운데 정렬
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false, //마우스 오버시 일시정지
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                    1240: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                    1640: {
                        slidesPerView: 9,
                        spaceBetween: 20,
                    },
                    2000: {
                        slidesPerView: 10,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {videos.map((developer, key) => (
                    <SwiperSlide key={key}>
                        <div className='profile' key={key}>
                            <div className='img play-icon'>
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className='info'>
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Developer