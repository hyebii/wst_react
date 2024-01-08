import React from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/contents/videos/videoCard'
import { websiteText } from '../data/website'

const Website = () => {
	return (
		<Main title="Website웹표준사이트" description="웹표준사이트입니다.">
			<section className='websitePage'>
				<h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
				<div className='video-inner'>
					<VideoCards videos={websiteText} />
				</div>
			</section>
		</Main>
	)
}

export default Website