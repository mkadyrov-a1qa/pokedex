import React, { useEffect, useState } from "react";
import { PokemonTile } from "../../ui-kit/PokemonTile/PokemonTile";
import axios from "axios";
import "./PokemonsList.scss";
import { LoadButton } from "../../ui-kit/Buttons/LoadButton";

export const PokemonsList = ({
  fromIndex,
  toIndex,
  getPokemons,
  pokemons,
  onLoadMoreClick,
  setSelectedPokemon,
  setModalActive,
}) => {

  const onChoosePokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  useEffect(() => {
    getPokemons();
  }, [fromIndex, toIndex]);

  return (
    <>
      <div className="list">
        {pokemons &&
          pokemons.map((item) => {
            return (
              <PokemonTile
                key={item.id}
                pokemon={item}
                onChoosePokemon={onChoosePokemon}
                setModalActive={setModalActive}
              />
            );
          })}
      </div>
      {pokemons.length > 1 && (
        <div className="load-button-wrap" onClick={onLoadMoreClick}>
          <LoadButton />
        </div>
      )}
    </>
  );
};
