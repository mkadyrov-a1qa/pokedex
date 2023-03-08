import React from 'react'
import { PokemonsList } from '../PokemonsList/PokemonsList'
import { Search } from '../SearchSection/Search'
import './App.scss'

export const App = () => {
  return (
    <div className='container'>
      <div className='title'>
        Pocedex
      </div>
      <Search />
      <PokemonsList />
    </div>
  )
}
