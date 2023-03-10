import React, { useState } from "react";
import { PokemonsList } from "../PokemonsList/PokemonsList";
import { Search } from "../SearchSection/Search";
import { Modal } from "../../ui-kit/Modal/Modal";
import axios from "axios";
import './App.scss';

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [fromIndex, setFromIndex] = useState(1);
  const [toIndex, setToIndex] = useState(10);
  const [notFound] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalActive, setModalActive] = useState(false);

  const getPokemons = async () => {
    const container = [];
    for (let i = fromIndex; i <= toIndex; i++) {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      container.push(data.data);
    }
    setPokemons((prev) => [...prev, ...container]);
  };

  const getPokemonsBySearch = async () => {
    if (inputValue !== "") {
      const pokemonName = inputValue.toLowerCase();
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
      );
      const pokemon = data.data;
      setPokemons(() => [pokemon]);
    } else {
      return;
    }
  };

  const onLoadMoreClick = () => {
    setFromIndex(fromIndex + 10);
    setToIndex(toIndex + 10);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="container">
        {
          isModalActive && <Modal pokemon = {selectedPokemon} setModalActive={setModalActive} />
        }
        <div className="title">Pocedex</div>
        <Search
          getPokemonsBySearch={getPokemonsBySearch}
          onInputChange={onInputChange}
        />
        {!notFound ? (
          <PokemonsList
            fromIndex={fromIndex}
            toIndex={toIndex}
            getPokemons={getPokemons}
            pokemons={pokemons}
            onLoadMoreClick={onLoadMoreClick}
            setSelectedPokemon={setSelectedPokemon}
            setModalActive={setModalActive}
          />
        ) : null}
      </div>
    </>
  );
};
