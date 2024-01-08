import React from 'react'
import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
  return (
    <section className='webd'>
        <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
        <div className='video-inner'>
            {webdText.map((video, key) => (
                <div className='video' key={key}>
                    <div className='thumb play-icon'>
                        <Link to={`/video/${video.channelId}`}>
                            <img src={video.img} alt={video.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Webd