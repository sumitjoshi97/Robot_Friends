import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div>
            <input type="text" id="SearchBox" placeholder="search robots" onChange={props.onSearchChange} value={props.searchValue}/>
        </div>
    )
}

export default SearchBox;