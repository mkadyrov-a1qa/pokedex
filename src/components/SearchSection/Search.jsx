import React from 'react'
import { SearchButton } from '../../ui-kit/Buttons/SearchButton'
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar'
import './Search.scss'

export const Search = ({getPokemonsBySearch, onInputChange}) => {



  return (
    <div className='search-container'>
      <SearchBar onInputChange = {onInputChange}/>
      <SearchButton getPokemonsBySearch = {getPokemonsBySearch}/>
    </div>
  )
}
