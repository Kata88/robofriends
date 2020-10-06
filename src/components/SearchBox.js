import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='tc pa3 ba br b--lightest-blue bg-washed-blue' 
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;