<div className="card pokemon-card col s12 m5 l3">
  <div className="card-image pokemon-image__wrap responsive-img">
    <img
      className="pokemon_image"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      alt="Pokemone sprite"
    />
  </div>
  <div className="pokemon-card__content">
    <h5 className="pokemon-card__title">{name.english}</h5>
    <a
      className="pokemon-card__btn waves-effect waves-light btn modal-trigger"
      id="my_btn"
      // to={`/pokemon/${id}`}
      href="#modal1"
    >
      {name.english}
    </a>
  </div>
  {pathname === "/game" && (
    <Button
      className="fight_button"
      variant="warning"
      onClick={() => handleClick(onePokemon)}
    >
      Select as fighter!
    </Button>
  )}
</div>;

<div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
  <div className="modal-image cardPhoto">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      alt="pokemon sprite"
    />
  </div>
  {id && (
    <div className="modal-content card_body">
      <h4 className="card_title">Type</h4>
      {type.map((type, index) => (
        <p key={index} className="text">
          {type}
        </p>
      ))}
      <h4 className="card_title">Base stats: </h4>
      <p className="text">HP: {base.HP}</p>
      <p className="text">Attack: {base.Attack}</p>
      <p className="text">Defense: {base.Defense}</p>
      <p className="text">Sp. Attack: {base["Sp. Attack"]}</p>
      <p className="text">Sp. Defense: {base["Sp. Defense"]}</p>
      <p className="text">Speed: {base.HP}</p>
    </div>
  )}
  <div className="modal-footer">
    <a href="#!" className="modal-close waves-effect waves-green btn-flat">
      Close
    </a>
  </div>
</div>;
