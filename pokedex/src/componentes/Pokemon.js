import React, { useContext } from "react";
import FavoritesContext from "../contexts/favoritesContexts";

const Pokemon = (props) => {
  const { favorites, updateFavorites } = useContext(FavoritesContext);
  const { pokemon } = props;
  const onheartClick = () => {
    updateFavorites(pokemon.name);
  };

  const heart = favorites.includes(pokemon.name) ? "❤️" : "🖤";
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <div className="pokemon-id">#{pokemon.id}</div>
        </div>
      </div>

      <div className="card-bottom">
        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
            return (
              <div key={index} className="pokemon-type-text">
                {type.type.name}
              </div>
            );
          })}
        </div>
        <button className="pokedex-btn" onClick={onheartClick}>
          {heart}
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
