import React from 'react'
import { websiteText } from '../../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
  return (
    <section className='website'>
      <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
      <div className='video-inner'>
        {websiteText.map((website, key) => (
            <div className='video' key={key}>
                <div className='thumb play-icon'>
                    <Link to={`/website/${website.channelId}`}>
                        <img src={website.img} alt={website.title} />
                    </Link>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Website