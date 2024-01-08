import React from 'react'
import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
  return (
    <section className='gsap'>
      <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
      <div className='video-inner'>
        {gsapText.map((video, key) => (
          <div className='video' key={key} >
            <div className='thumb play-icon'>
                <Link to={`/gsap/${video.channelId}`}>
                    <img src={video.img} alt={video.title} />
                </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gsap