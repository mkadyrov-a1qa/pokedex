import React, { useEffect } from "react";
import { PokemonTile } from "../../ui-kit/PokemonTile/PokemonTile";
import "./PokemonsList.scss";
import { LoadButton } from "../../ui-kit/Buttons/LoadButton";
import { TailSpin } from "react-loader-spinner";

export const PokemonsList = ({
  fromIndex,
  toIndex,
  getPokemons,
  pokemons,
  onLoadMoreClick,
  setSelectedPokemon,
  setModalActive,
  isFetchingData,
}) => {
  const onChoosePokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

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
          {isFetchingData ? (
            <TailSpin
              height="45"
              width="45"
              color="#61C3FF"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <LoadButton />
          )}
        </div>
      )}
    </>
  );
};
