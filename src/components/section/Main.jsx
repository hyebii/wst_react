import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';



const Main = (props) => {
	return (
        <HelmetProvider> {/* Helmet 컴포넌트를 초기화 */}
            <Helmet //메타 데이터와 타이틀 설정
                titleTemplate="%s | Webs Youtube" // &s는 실제 타이틀로 대체됨
                defaultTitle="Webs Youtube" //페이지타이틀 없을 때 쓸 기본타이틀
                defer={false} //true로 설정시 렌더링 전까지 Helmet컴포넌트가 기다림
            >
                {/* 사이트마다 */}
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
                {/* Props랑 meta가 없으면 Webs Youtube가 타이틀이됨 */}
            </Helmet>

            <Header />
            <main id="main" role='main'>
                {props.children} 
            </main>
            <Footer />
        </HelmetProvider>
	)
}

export default Main