import React from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/contents/videos/videoCard'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
	return (
		<Main title="Youtube클론사이트" description="유튜브페이지입니다.">
			<section className='youtubePage'>
				<h2>😱 지금 이 코딩을 영상으로</h2>
				<div className='video-inner'>
					<VideoCards videos={youtubeText} />
				</div>
			</section>
		</Main>
	)
}

export default Youtube