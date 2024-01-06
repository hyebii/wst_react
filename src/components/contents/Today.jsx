import React from 'react'
import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
	return (
		<section className='today'>
			<div className="today-inner">
				<div className='thumb'>
					<Link to={todayText[0].page}>
						<img src={todayText[0].img} alt={todayText[0].title}></img>
					</Link>
				</div>
				<div className='txt'>
					<span className='chip'>today!</span>
					<h3 className='tit'>
						<Link to={todayText[0].page}>
							{todayText[0].title}
						</Link>
					</h3>
					<p className='desc'>{todayText[0].desc}</p>
					<div className='info'>
						<span className='author'>
							<Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link>
							{/* 문자열과 변수를 결합시킬 때 ``사용 */}
						</span>
						<span className='date'>{todayText[0].date}</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Today