import React from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/contents/videos/videoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {
	return (
		<Main title="Gsap Parallax" description="Gasp사이트 튜토리얼강의입니다.">
			<section className='gsapPage'>
				<h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
				<div className='video-inner'>
					<VideoCards videos={gsapText} />
				</div>
			</section>
		</Main>
	)
}

export default Gsap