import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;

  const onLeftClickHandler = () => {
    if(page > 0) setPage((prev) => prev - 1);

  };
  const onRightClickHandler = () => {
    if(page+1 !== totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <h1 className="pokedex-header">Pokedex</h1>
      </div>

      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
      />
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
