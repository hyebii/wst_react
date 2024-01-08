import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { Navigation, /* Pagination */ } from 'swiper/modules';

//useState인가 useEfect인가 뭔지 모르겠음
//사이트가 로딩되면 조금 더 부드럽게 연출하기 위해서 넣는 로딩 효과라는데 ,.. ,패스

const VideoSlider = ({videos, title, id}) => {
	return (
		<section className={id}>
			<h2>{title}</h2>

            <div className='video-slider'>
                <Swiper
                    modules={[Navigation, /* Pagination */]}
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true} //좌우버튼
					// pagination={true}
                    className={`mySwiper-${id}`}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {videos.map((video, key) => (
						<SwiperSlide key={key}>
							<div className='video' key={key}>
								<div className='thumb play-icon'>
									<Link to={`/video/${video.channelId}`}>
										<img src={video.img} alt={video.title} />
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

export default VideoSlider