import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const SinglePokemon = ({ selectedId }) => {
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
    <div>
      <div className="card_block">
        <Card className="cardContainer" style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            className="cardPhoto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          />
          {pokemonId && (
            <Card.Body className="card_body">
              <Card.Title className="card_title">
                {pokemonId.name.english}
              </Card.Title>

              <Card.Subtitle className="card_title">Type</Card.Subtitle>
              {pokemonId.type.map((type, index) => (
                <Card.Text key={index} className="card_title mb-2 text-muted">
                  {type}
                </Card.Text>
              ))}

              {/* {pokemonId.type.map((onetype, index) => (
                <Card.Text key={index} className="card_title">
                  <Card.Link
                    href={`/pokemon/${id}/${type}`}
                    className="mb-2 text-muted"
                  >
                    Type
                  </Card.Link>
                </Card.Text>
              ))} */}
              <Card.Subtitle className="card_title">Base stats: </Card.Subtitle>

              {/* <Card.Link
                href={`/pokemon/${id}/base`}
                className="mb-2 text-muted"
              >
                Base
              </Card.Link> */}

              <Card.Text className="mb-2 text-muted">
                HP: {pokemonId.base.HP}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Attack: {pokemonId.base.Attack}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Defense: {pokemonId.base.Defense}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Sp. Attack: {pokemonId.base["Sp. Attack"]}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Sp. Defense: {pokemonId.base["Sp. Defense"]}
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Speed: {pokemonId.base.HP}
              </Card.Text>
            </Card.Body>
          )}
        </Card>
      </div>
    </div>
  );
};

export default SinglePokemon;
