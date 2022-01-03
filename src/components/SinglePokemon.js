import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const SinglePokemon = ({ selectedId }) => {
  // console.log(selectedId);
  let { id } = useParams();

  const [pokemonId, setPokemonId] = useState();

  if (!id) {
    id = selectedId;
  }

  useEffect(() => {
    fetch(`https://pokefight-back-end.herokuapp.com/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemonId(data));
  }, [id]);
  // console.log(pokemonId);

  return (
    <div className="card pokemon-card col s12 m5 l3">
      <div className="card-image pokemon-image__wrap responsive-img">
        <img
          variant="top"
          className="cardPhoto responsive-img hoverable"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          id="poke-fight-vs"
          alt="pokemon"
        />
      </div>

      {pokemonId && (
        <div className="pokemon-card__content">
          <h4 className="pokemon-card__title">{pokemonId.name.english}</h4>

          <h5 className="card_title">Type</h5>
          {pokemonId.type.map((type, index) => (
            <p key={index} className="card_title mb-2 text-muted">
              {type}
            </p>
          ))}

          <h5 className="card_title">Base stats: </h5>

          <p className="text">HP: {pokemonId.base.HP}</p>
          <p className="text">Attack: {pokemonId.base.Attack}</p>
          <p className="text">Defense: {pokemonId.base.Defense}</p>
          <p className="text">Sp. Attack: {pokemonId.base["Sp. Attack"]}</p>
          <p className="text">Sp. Defense: {pokemonId.base["Sp. Defense"]}</p>
          <p className="text">Speed: {pokemonId.base.HP}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePokemon;
