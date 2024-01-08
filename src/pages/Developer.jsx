import React from 'react'
import Main from '../components/section/Main'
import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
	return (
		<Main title="Developer추천개발자" description="오늘의 추천개발자입니다.">
			<section className='developerPage'>
        <h2>😍추천 개발자를 소개합니다.</h2>
        <div className='developer-inner'>
            {developerText.map((developer, key) => (
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
            ))}
        </div>
    	</section>
		</Main>
	)
}

export default Developer