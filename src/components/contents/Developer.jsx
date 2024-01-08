import React from 'react'
import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <section className='developer'>
        <h2>😍추천 개발자를 소개합니다.</h2>
        <div className='developer-inner overflow'>
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
  )
}

export default Developer