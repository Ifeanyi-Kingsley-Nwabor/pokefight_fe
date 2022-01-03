import React, { useRef, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import M from "materialize-css";
import PokemonModal from "./PokemonModal";

import SinglePokemon from "./SinglePokemon";

const PokemonCard = ({ onePokemon, handleClick, selectedPokemon }) => {
  const { name, id, type, base } = onePokemon;
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  return (
    <div className="container">
      <div className="card  hoverable pokemon-card col s12 m5 l3">
        <div className="card-image pokemon-image__wrap responsive-img">
          <img
            className="pokemon_image responsive-img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt="Pokemone sprite"
          />
        </div>
        <div className="pokemon-card__content">
          <h5 className="pokeId">#0{id}</h5>
          <h5 className="pokemon-card__title">
            <a
              className="pokemon-card__btn waves-effect waves-light btn modal-trigger"
              id="my_btn"
              href="#modal1"
            >
              {name.english}
            </a>
          </h5>

          <PokemonModal onePokemon={onePokemon} />
        </div>
        {pathname === "/game" && (
          <Button
            className="fight_button"
            variant="warning"
            onClick={() => handleClick(onePokemon)}
          >
            Select as fighter!
          </Button>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
