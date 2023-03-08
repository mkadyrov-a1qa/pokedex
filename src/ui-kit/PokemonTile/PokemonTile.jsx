import React from 'react'
import './PokemonTile.scss'

export const PokemonTile = ({pokemon}) => {
  
  return (
    <div className='tile'>
      <div className='image-wrap'> 
        <img className='image' src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/> 
        <div className='name'><span className='number'>#{pokemon.id}</span> {pokemon.name}</div>
      </div>
    </div>
  )
}
