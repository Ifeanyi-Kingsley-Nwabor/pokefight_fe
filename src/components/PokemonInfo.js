import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PokemonInfo = () => {
  const { id, info } = useParams(0);
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    fetch(`https://pokefight-repo.herokuapp.com/pokemon/${id}/${info}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonInfo(data);
      });
  }, [id, info]);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="cardPhoto responsive-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          style={{ width: "100px" }}
        />
        {pokemonInfo && (
          <Card.Body>
            <Card.Title>Info: {info}</Card.Title>
            <Card.Title>ID: {id}</Card.Title>
            {Object.keys(pokemonInfo).map((key, i) => (
              <p key={i}>
                <span>{key}: </span>
                <span>{pokemonInfo[key]}</span>
              </p>
            ))}
          </Card.Body>
        )}
        {!((info === "base") | (info === "type") | (info === "name")) && (
          <h3>404: Required info does not exist.</h3>
        )}
        {id > 809 && <h3>404: Required ID does not exist.</h3>}
      </Card>
    </div>
  );
};

export default PokemonInfo;
