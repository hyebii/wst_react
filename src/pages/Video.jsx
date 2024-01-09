import React from "react";
import Main from "../components/section/Main";
import ReactPlayer from "react-player";

//video API로 가져오는거라서 안가져오고 그냥 내맘대로 비디오 넣어봄
//나중에는 Search api랑 같이 이것도 해보기
const Video = ({playList, index}) => {
  return (
    <Main title="Video비디오" description="비디오 사이트입니다.">
      <section id="videoPage">
				<div className="video-wrapper">
					<h2>video Page</h2>
					<ReactPlayer
						className='react-player'
						playing={true} //자동재생 on
						muted={true} // 자동 재생 on playing,muted를 true해야 autoplay설정됨
						controls={false} // 플레이어 컨트롤 노출 여부
						url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
						width="100%"
						height="100%"
						// style={{ position: "absolute", top: '50%', left: '50%' , transform: "translate(-50%, -50%)"}}
					/>
					<div className="video-info">

					</div>
				</div>
      </section>
    </Main>
  );
};

export default Video;
