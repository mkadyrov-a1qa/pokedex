import React from 'react'
import './styles.scss'

export const SearchButton = ({ getPokemonsBySearch }) => {
  return (
    <div className='search-button' onClick = {getPokemonsBySearch} ><span className='search-label'>Search</span></div>
  )
}
