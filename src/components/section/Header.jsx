import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header-logo">
        <a href="/">
          <em aria-hidden="true"></em> {/* 애니메이션자리 */}
          <span>
            webs
            <br />
            youtube
          </span>
        </a>
      </h1>
      <nav className="header-menu">
        <ul className="menu">
          <li className="active">
            <a href="/">웹스토리보이</a>
          </li>
          <li>
            <a href="/today">추천영상</a>
          </li>
          <li>
            <a href="/developer">추천 개발자</a>
          </li>
          <li>
            <a href="/webd">웹디자인 기능사</a>
          </li>
          <li>
            <a href="/website">웹표준 사이트</a>
          </li>
          <li>
            <a href="/gsap">GSAP Parallax</a>
          </li>
          <li>
            <a href="/port">포트폴리오 사이트</a>
          </li>
          <li>
            <a href="/youtube">유튜브 클론 사이트</a>
          </li>
        </ul>
        <ul className="keyword">
          <li>
            <a href="/search/webstoryboy">webstoryboy</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
          <li>
            <a href="/search/next.js">Next.js</a>
          </li>
          <li>
            <a href="/search/node.js">Node.js</a>
          </li>
          <li>
            <a href="/search/sql">SQL</a>
          </li>
          <li>
            <a href="/search/React Portfolio">portfolio</a>
          </li>
          <li>
            <a href="/search/NewJeans">music</a>
          </li>
        </ul>
      </nav>
      <div className="header-sns">
        <ul>
          <li>
            <a href="https://github.com/webstoryboy" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/webstoryboy"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/webstoryboy" rel="noopener noreferrer">
              <AiOutlineCodepen />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/webstoryboy"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
