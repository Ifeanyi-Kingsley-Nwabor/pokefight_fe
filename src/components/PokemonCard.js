import React, { useRef, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import M from "materialize-css";

// import SinglePokemon from "./SinglePokemon";

const PokemonCard = ({ onePokemon, handleClick, selectedPokemon }) => {
  const { name, id, type, base } = onePokemon;
  const pathname = window.location.pathname;

  // const [selectedPokemon, setSelectedPokemon] = useState([]);

  // const handleClick = () => {
  //   console.log(onePokemon);
  //   let updatedPokemon = [...selectedPokemon, onePokemon];
  //   setSelectedPokemon(updatedPokemon);
  // };

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  return (
    <div className="flex-container">
      <Card
        border="primary"
        className="cardContainer"
        style={{ width: "20rem" }}
      >
        <Card.Img
          variant="top"
          className="cardPhoto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          style={{ width: "200px" }}
        />

        {/* <Card.Body className="card_body">
          <Card.Link href={`/pokemon/${id}`} className="mb-2 text-muted">
            {name.english}
          </Card.Link>
        </Card.Body> */}

        <Card.Body className="card_body">
          <Card.Link href="#modal1" className="mb-2 text-muted modal-trigger">
            {name.english}
          </Card.Link>
        </Card.Body>
        {pathname === "/game" && (
          <Button
            className="fight_button"
            variant="warning"
            onClick={() => handleClick(onePokemon)}
          >
            Select as fighter!
          </Button>
        )}
      </Card>
      <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
        <div className="modal-content ">
          <h4>{name.english}</h4>

          {/* <div className="card_block"> */}
          <Card className="cardContainer" style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              className="cardPhoto"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            />
            {id && (
              <Card.Body className="card_body">
                <Card.Subtitle className="card_title">Type</Card.Subtitle>
                {type.map((type, index) => (
                  <Card.Text key={index} className="card_title mb-2 text-muted">
                    {type}
                  </Card.Text>
                ))}

                <Card.Subtitle className="card_title">
                  Base stats:{" "}
                </Card.Subtitle>

                <Card.Text className="mb-2 text-muted">HP: {base.HP}</Card.Text>
                <Card.Text className="mb-2 text-muted">
                  Attack: {base.Attack}
                </Card.Text>
                <Card.Text className="mb-2 text-muted">
                  Defense: {base.Defense}
                </Card.Text>
                <Card.Text className="mb-2 text-muted">
                  Sp. Attack: {base["Sp. Attack"]}
                </Card.Text>
                <Card.Text className="mb-2 text-muted">
                  Sp. Defense: {base["Sp. Defense"]}
                </Card.Text>
                <Card.Text className="mb-2 text-muted">
                  Speed: {base.HP}
                </Card.Text>
              </Card.Body>
            )}
          </Card>
          {/* </div> */}
        </div>
        <div className="modal-footer">
          <a href="#" className="modal-close waves-effect waves-green btn-flat">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
