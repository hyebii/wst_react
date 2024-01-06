import React from 'react'

const Search = () => {
    return (
        <div id='search'>
            <div className='search-inner'>
                <label htmlFor='searchInput'>
                    <span className='search-icon'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='search-input' 
                />
            </div>
        </div>
    )
}
export default Search