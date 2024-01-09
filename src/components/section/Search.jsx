import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//💥input에 키워드입력 후 엔터 => 주소에 변경돼야함
//검색 입력 필드를 제공하여 사용자가 입력하고 Enter 키를 누르면 
//URL의 일부로 검색 키워드를 포함하는 새로운 URL로 이동 하도록 만들기

const Search = () => {
    //useState를 이용하여 searchKeyword라는 상태 변수를 생성
    //초기값을 빈 문자열로 설정
    //이 변수는 사용자가 입력한 검색어를 저장함
    const [searchKeyword, setSearchKeyword] = useState('');

    //useNavigate 훅을 사용하여 navigate 함수를 가져옴
    //React Router의 내비게이션을 처리하는데 사용
    const navigate = useNavigate();

    //handleSearch 함수는 검색 버튼을 클릭하거나 Enter 키를 눌렀을 때 호출
    //현재 검색어를 콘솔에 출력 (console.log(searchKeyword)).
    //검색어가 비어 있지 않은 경우에만 내비게이션을 수행하고 검색어를 초기화함
    const handleSearch = () => {
        console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    };

    
    return (
        <div id='search'>
            <div className='search-inner'>
                {/* 검색 버튼을 클릭하거나 Enter 키를 누르면 
                handleSearch 함수가 호출되어 검색을 수행하고, 검색어는 초기화 */}
                <label htmlFor='searchInput'>
                    <span className='search-icon'>검색</span>
                </label>
                {/* <input> 엘리먼트를 통해 검색어를 입력할 수 있음
                {/* onChange 이벤트 핸들러를 사용하여 입력된 검색어를
                {/* searchKeyword 상태에 업데이트
                {/* Enter 키를 눌렀을 때 검색을 실행하도록 onKeyDown 이벤트 핸들러를 설정 */}
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='search-input' 
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default Search