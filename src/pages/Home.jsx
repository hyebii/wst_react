import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/contents/videos/VideoSlider'
// import Webd from '../components/contents/Webd'
// import Website from '../components/contents/Website'
// import Gsap from '../components/contents/Gsap'
// import Portfolio from '../components/contents/Portfolio'
// import Youtube from '../components/contents/Youtube'

import { webdText } from '../data/webd'
import { websiteText } from "../data/website"
import { gsapText } from "../data/gsap"
import { portfolioText } from "../data/portfolio"
import { youtubeText } from "../data/youtube"


const Home = () => {
	return (
		<Main 
			title="Home웹스토리보이" 
			description="Home웹스토리보이에 오신것을 환영합니다."
		>
			{/* Home이라는 페이지(메인페이지) 컴포넌트 - 메인에 있는 영역들 */}
			<Today />
			<Developer />
			<VideoSlider videos={webdText} title="😮 웹디자인기능사 준비는 이걸로!" id="webd" />
			<VideoSlider videos={websiteText} title="😛 웹표준 사이트 만들기 기초 다지기" id="website" />
			<VideoSlider videos={gsapText} title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!" id="gsap" />
			<VideoSlider videos={portfolioText} title="🤗 포트폴리오 만드는 방법을 공유합니다." id="port" />
			<VideoSlider videos={youtubeText} title="😱 지금 이 코딩을 영상으로" id="youtube" />
			{/* 이렇게 할꺼면 하나하나 페이지 만들필요가 없네. . .개쩐다 */}
		</Main>
	)
}

export default Home