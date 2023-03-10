import React from 'react'
import './Modal.scss'
import { IoIosClose } from 'react-icons/io'

export const Modal = ({ pokemon, setModalActive }) => {
  return (
    <div className='modal-background'>
      <div className='modal'>
        <div className='icon' onClick = {() => setModalActive(false)}>
          <IoIosClose size={30} />
        </div>
        <div className='image-wrap'> 
          <img className='image' src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/> 
        </div>
        <div className='name'>{pokemon.name}</div>
        <div className='weight'>Weight: {pokemon.weight}</div>
      </div>
    </div>
  )
}
