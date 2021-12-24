import React, { useRef, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import SinglePokemon from "./SinglePokemon";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import M from "materialize-css";

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

  console.log(selectedPokemon);

  return (
    <>
      <h2>Ready to fight!</h2>
      <h3>
        Choose <b>two</b> contenders, then press <b>FIGHT</b>!
      </h3>
      {selectedPokemon.length > 0 && (
        <>
          <h5>Fighter 1:</h5>
          <SinglePokemon selectedId={selectedPokemon[0].id} />
          {selectedPokemon.length > 1 && (
            <>
              <h5>Fighter 2:</h5>
              <SinglePokemon selectedId={selectedPokemon[1].id} />
              <Button
                className="fight_button modal-trigger"
                variant="danger"
                onClick={() => fightLogic()}
                // href="#modal1"
                // data-target="modal1"
              >
                Fight!
              </Button>
              <Button className="fight_button" variant="danger" href="/game">
                Reset
              </Button>
            </>
          )}
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
          {fightWinner && <h2>The Winner is {fightWinner}!</h2>}
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
