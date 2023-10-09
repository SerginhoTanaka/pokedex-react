import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
const Pokedex = (props) => {
  const { pokemons, loading, page, totalPage } = props;
  const onLeftClickHandler = () => {
    console.log("Clicou no botão esquerdo");
  };
  const onRightClickHandler = () => {
    console.log("Clicou no botão direito");
  };

  return (
    <div>
      <div>
        <h1 className="pokedex-header">Pokedex</h1>
      </div>

      <Pagination
      page={page+1}
      totalPages={totalPages}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick} />
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