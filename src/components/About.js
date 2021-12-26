import React from "react";

const About = () => {
  return (
    <main className="container" style={{ padding: "1rem 0" }}>
      <h2>About the Game</h2>
      <p className="text">
        <a
          href="https://www.redbull.com/my-en/10-pokemon-facts-you-probably-didnt-know-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokémon
        </a>{" "}
        (an abbreviation for Pocket Monsters in Japan) is a Japanese media
        franchise managed by The Pokémon Company, a company founded by Nintendo,
        Game Freak, and Creatures. Pokémon was invented by a Japanese man named
        Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator. Back
        in 1982 Satoshi started a gaming magazine together with his friends
        called Game Freak, but after a while he decided to start making his own
        video games, instead of writing about them.
      </p>
      <p className="text">
        The first Pokémon ever designed It may be entry #112 in the Pokédex, but
        according to Ken Sugimori - the primary designer for the Pokémon games –
        Rhydon was the first Pokémon ever created. This is also the reason why
        sprites of Rhydon were so widespread in the original games. for more fun
        facts, visit{" "}
        <a
          href="https://www.redbull.com/my-en/10-pokemon-facts-you-probably-didnt-know-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          this Link
        </a>
      </p>
      <p>
        This Project was created by{" "}
        <i>
          <a
            href="https://de.linkedin.com/in/iknwabor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ifeanyi Kingsley Nwabor
          </a>
          ,{" "}
          <a
            href="https://de.linkedin.com/in/thilo-hemme-884351227"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thilo Hemme
          </a>{" "}
          and{" "}
          <a
            href="https://de.linkedin.com/in/tomáš-rihák-70a84a3b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tomas Rihak
          </a>
        </i>{" "}
        as a prerequisite for the completion of the Full-stack Web and App
        Development Training at the{" "}
        <a
          href="https://www.wbscodingschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WBS Coding school
        </a>
        .
      </p>
    </main>
  );
};

export default About;
