import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div>
        <h1 className="pokedex-header">Pokedex</h1>
      </div>

      <div>Paginação</div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;