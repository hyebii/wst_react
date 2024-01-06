import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
	return (
		<Main title="Today추천영상" description="오늘의 추천 영상입니다.">
			<section id='todayPage'>
				<h2>😍오늘의 추천 영상입니다.</h2>

				{/* map으로 반복문사용해서 여러개 가져옴(today컨텐츠에서는 [0]으로 하나만 가져옴) */}
				{todayText.map((today, key) => (
					/* 컨텐츠 today에서 반복될 부분 today-inner 복붙해서 가져옴 */
					<div className="today-inner" key={key}>
					<div className='thumb play-icon'>
						<Link to={today.page}>
							<img src={today.img} alt={today.title}></img>
						</Link>
					</div>
					<div className='txt'>
						<span className='chip'>today!</span>
						<h3 className='tit'>
							<Link to={today.page}>
								{today.title}
							</Link>
						</h3>
						<p className='desc'>{today.desc}</p>
						<div className='info'>
							<span className='author'>
								<Link to={`/channel/${today.channelId}`}>
									{today.author}
								</Link>
								{/* 문자열과 변수를 결합시킬 때 ``사용 */}
							</span>
							<span className='date'>{today.date}</span>
						</div>
					</div>
				</div>
				))}
			</section>
		</Main>
	)
}

export default Today