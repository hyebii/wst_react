import React from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/contents/videos/videoCard'
import { portfolioText } from '../data/portfolio'

const Port = () => {
	return (
		<Main title="Port포폴사이트" description="포폴사이트 튜토리얼강의입니다.">
			<section className='portPage'>
				<h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
				<div className='video-inner'>
					<VideoCards videos={portfolioText} />
				</div>
			</section>
		</Main>
	)
}

export default Port