import React from 'react'
import Main from '../components/section/Main'
import { me } from '../data/me'

const Channel = () => {
	return (
		<Main title="Channel채널" description="채널페이지입니다.">
			<section id='channel'>
                <div className='channel-header'>
                    <div className='circle'>
                        <img src={me[0].url} alt={me[0].title} />
                    </div>
                </div>
                <div className='channel-info'>
                    <h3 className='tit'>{me[0].title}</h3>
                    <p className='desc'>{me[0].description}</p>
                    <div className='info'>
                        <span>{me[0].subscriberCount}</span>
                        <span>{me[0].videoCount}</span>
                        <span>{me[0].viewCount}</span>
                    </div>
                </div>
			</section>
		</Main>
	)
}

export default Channel