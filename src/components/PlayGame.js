import React, { useRef, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import SinglePokemon from "./SinglePokemon";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import M from "materialize-css";
import versus from "../img/versus.png";
import PlayGameModal from "./PlayGameModal";

const PokemonFight = ({
  pokemon,
  handleClick,
  selectedPokemon,
  fightWinner,
  fightLogic,
}) => {
  // const [fightWinner, setFightWinner] = useState(null);

  // const reset = () => {
  //   // reset();
  //   selectedPokemon = [];
  // };

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (!pokemon) {
    return <h2>Loading...</h2>;
  }

  // console.log(selectedPokemon);

  return (
    <>
      <h2>Ready to fight!</h2>
      <h3>
        Choose <b>two</b> contenders, then press <b>FIGHT</b>!
      </h3>
      {selectedPokemon.length > 0 && (
        <>
          <div className="common-links">
            <div className="fight-container-1">
              <h5>Fighter 1: {selectedPokemon[0].name.english}</h5>
              <SinglePokemon selectedId={selectedPokemon[0].id} />
            </div>

            <img className="versus responsive-img" src={versus} alt="versus" />
            {selectedPokemon.length > 1 && (
              <div className="fight-container-2">
                <h5>Fighter 2: {selectedPokemon[1].name.english}</h5>
                <SinglePokemon selectedId={selectedPokemon[1].id} />
              </div>
            )}
          </div>

          <div className="common-links">
            <Button
              className="fight_button modal-trigger"
              variant="danger"
              onClick={() => fightLogic()}
              href="#modal1"
              // data-target="modal1"
            >
              Fight!
            </Button>
            <Button className="fight_button" variant="danger" href="/game">
              Reset
            </Button>
          </div>

          {/* <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
            <div className="modal-content ">
              <h2>Congratulations... </h2>
              {fightWinner && <h2>The Winner is {fightWinner}!</h2>}
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-action modal-close waves-effect waves-green btn-flat"
              >
                Close
              </a>
            </div>
          </div> */}

          {/* {fightWinner && ( */}
          <PlayGameModal fightWinner={fightWinner} />
          {/* // <div className="card-panel hoverable">
            //   <h2>The Winner is {fightWinner}!</h2>
            // </div> */}
          {/* )} */}
        </>
      )}
      <div>
        {pokemon.slice(0, 10).map((onePokemon, index) => (
          <div key={index}>
            <PokemonCard
              onePokemon={onePokemon}
              selectedPokemon={selectedPokemon}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonFight;
