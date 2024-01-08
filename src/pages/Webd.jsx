import React from "react";
import Main from "../components/section/Main";
import { webdText } from "../data/webd";
import VideoCards from "../components/contents/videos/videoCard";

const Webd = () => {
  return (
    <Main title="Webd웹디자인기능사" description="웹디자인기능사 사이트입니다.">
      <section className="webdPage">
        <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
        <div className="video-inner">
            <VideoCards videos={webdText} />
        </div>
      </section>
    </Main>
  );
};

export default Webd;
