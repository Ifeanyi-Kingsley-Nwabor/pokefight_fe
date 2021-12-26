import React, { useRef, useEffect } from "react";
import M from "materialize-css";

const PokemonModal = ({ onePokemon }) => {
  const { name, id, type, base } = onePokemon;

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  return (
    <div
      id="modal1"
      className="modal  hoverable col s12 m8 "
      ref={mySuperModal}
    >
      <div className="modal-image modal-cardPhoto ">
        <div className=" hoverable">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt="pokemon sprite"
            className="responsive-img "
          />
        </div>

        <h5 className="pokeId hoverable">#0{id}</h5>
      </div>
      <div className="poke-stats   col s12 m8 ">
        <div className="card-modal hoverable" id="pokemon-name">
          <h6 className="pokemon-card__title ">Name</h6>
          <p className="text pokemon-name-modal">English: {name.english}</p>
          <p className="text pokemon-name-modal">Japanese: {name.japanese}</p>
          <p className="text pokemon-name-modal">Chinese: {name.chinese}</p>
          <p className="text pokemon-name-modal">French: {name.french}</p>
        </div>

        {id && (
          <div className="modal-content poke-stats card_body">
            <div className="card-modal hoverable">
              <h6 className=" pokemon-card__title">Type</h6>
              {type.map((type, index) => (
                <p key={index} className="text">
                  {type}
                </p>
              ))}
            </div>
            <div className="card-modal hoverable">
              <h6 className="pokemon-card__title">Base stats: </h6>
              <p className="text">HP: {base.HP}</p>
              <p className="text">Attack: {base.Attack}</p>
              <p className="text">Defense: {base.Defense}</p>
              <p className="text">Sp. Attack: {base["Sp. Attack"]}</p>
              <p className="text">Sp. Defense: {base["Sp. Defense"]}</p>
              <p className="text">Speed: {base.HP}</p>
            </div>
          </div>
        )}
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat hoverable"
            id="pokemon-modal-close"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
