import React from "react";
import "./Modal.scss";
import { IoIosClose } from "react-icons/io";

export const Modal = ({ pokemon, setModalActive }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="icon" onClick={() => setModalActive(false)}>
          <IoIosClose size={30} />
        </div>
        <div className="content-wrap">
          <div className="image-wrap">
            {pokemon.sprites.other.dream_world.front_default ? (
              <img
                className="image"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            ) : (
              <TailSpin
                height="25"
                width="25"
                color="#898989"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            )}
          </div>
          <div className="capabilities">
            <div className="name">{pokemon.name}</div>
            <div className="order">Order: {pokemon.order}</div>
            <div className="weight">Weight: {pokemon.weight} lbs</div>
            <div className="height">Height: {pokemon.height}'</div>
            <div className="ab">
              Ability: {pokemon.abilities[0].ability.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
