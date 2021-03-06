import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, NavLink } from "react-router-dom";
import logo from "./img/pokemon-icon.png";
import Home from "./components/Home";
import About from "./components/About";
import PlayGame from "./components/PlayGame";
import LeaderBoard from "./components/LeaderBoard";
import Contact from "./components/Contact";
import SinglePokemon from "./components/SinglePokemon";
import PokemonInfo from "./components/PokemonInfo";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState();
  // const APP_HEROKU_PROD = process.env;
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [fightWinner, setFightWinner] = useState();
  // const url = "http://localhost:3010/pokemon";
  const heroku = "https://pokefight-back-end.herokuapp.com/api/pokemon";

  const handleClick = (onePokemon) => {
    // console.log(onePokemon);
    let updatedPokemon = [...selectedPokemon, onePokemon];
    setSelectedPokemon(updatedPokemon);
  };

  const fightLogic = () => {
    const flip = Math.floor(Math.random() * 11);
    let winner;
    if (flip > 5) {
      winner = selectedPokemon[0].name.english;
      // const winner = selectedPokemon[0].name.english;
    } else {
      winner = selectedPokemon[1].name.english;
      // const winner = selectedPokemon[1].name.english;
    }

    // fetchData();
    console.log({ saveUrl: `${heroku}/game/save` });

    fetch(`${heroku}/game/save`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pokemonA: selectedPokemon[0].name.english,
        pokemonB: selectedPokemon[1].name.english,
        winner,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setFightWinner(winner);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        await axios
          .get("https://pokefight-back-end.herokuapp.com/api/pokemon")

          .then((result) => {
            setPokemon(result.data);
            // setPokemon(result.data.pokemonData);
          });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPokemon();

    // fetch("http://localhost:3010/api/pokemon")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setPokemon(data.pokemonData);
    //     setPokemon(data);
    //   });
  }, []);

  return (
    <div className="App">
      <div>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <NavLink className="link" to="/">
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink className="link" to="/about">
            About
          </NavLink>{" "}
          |{" "}
          <NavLink className="link" to="/game">
            Play Game
          </NavLink>{" "}
          |{" "}
          <NavLink className="link" to="/leader-board">
            Leader Board
          </NavLink>{" "}
          |{" "}
          <NavLink className="link" to="/contact">
            Contact us
          </NavLink>
        </nav>
        <div className="logo">
          {/* <h5>Pok??dex</h5> */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Penguinie...
        </p>
      </header> */}

      <Switch>
        <Route path="/pokemon/:id/:info">
          <PokemonInfo />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/game">
          <PlayGame
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            handleClick={handleClick}
            fightWinner={fightWinner}
            fightLogic={fightLogic}
          />
        </Route>

        <Route path="/leader-board">
          <LeaderBoard />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/pokemon/:id?">
          <SinglePokemon />
        </Route>

        <Route exact path="/">
          <Home pokemon={pokemon} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
