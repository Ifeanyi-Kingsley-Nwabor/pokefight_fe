import React from "react";
import PokemonCard from "./PokemonCard";

const Home = ({ pokemon }) => {
  if (!pokemon) {
    return <h1>Loading...</h1>;
  }

  // const filteredPokemon = pokemon && pokemon
  // .filter((onePokemon) => id ? Number(id) === onePokemon.id : onePokemon)

  // console.log({filteredPokemon})

  return (
    <>
      <div>
        {pokemon.slice(0, 10).map((onePokemon, index) => (
          <PokemonCard onePokemon={onePokemon} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
