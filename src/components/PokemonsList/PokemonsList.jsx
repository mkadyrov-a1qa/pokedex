import React, { useEffect, useState } from 'react'
import { PokemonTile } from '../../ui-kit/PokemonTile/PokemonTile'
import axios from 'axios'
import './PokemonsList.scss'
import { LoadButton } from '../../ui-kit/Buttons/LoadButton'


export const PokemonsList = () => {

  const [pokemons, setPokemons] = useState([])
  const [fromIndex, setFromIndex] = useState(1)
  const [toIndex, setToIndex] = useState(10)

  const getPokemons = async () => {
    const container = []; 
    for (let i = fromIndex; i <= toIndex; i++) {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      container.push(data.data)
    }

    setPokemons((prev) => [...prev, ...container])
  }

  const onLoadMoreClick = () => {
    setFromIndex(fromIndex + 10)
    setToIndex(toIndex + 10)
  }

  useEffect(() => {
    getPokemons()
  }, [fromIndex, toIndex])

  return (
    <>
      <div className="list">
        {
          pokemons && pokemons.map((item) => {
            return <PokemonTile key={item.id} pokemon={item} />
          })
        }
      </div>
      <div className="load-button-wrap" onClick = {onLoadMoreClick}>
        <LoadButton />
      </div>
    </>
  );
}
