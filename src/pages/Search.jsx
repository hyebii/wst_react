import React from 'react'
import Main from '../components/section/Main'

const Search = () => {
	return (
		<Main title="Search검색" description="검색 결과 페이지입니다.">
			<section id='searchPage'>
				<div className='video-inner'>
					{/* <VideoSearch videos={videos} /> */}
				</div>
			</section>
		</Main>
	)
}

export default Search