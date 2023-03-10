import React from 'react';
import './SearchBar.scss';

export const SearchBar = ({onInputChange}) => {
  return (
    <div>
      <input className='input' placeholder='search for pokemon' onChange={onInputChange} />
    </div>
  )
}
