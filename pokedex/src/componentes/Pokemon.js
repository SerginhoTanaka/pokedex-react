import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props;
    const onheartClick = () => {
        console.log("Clicou no coração");
      };
    
    const heart = "❤"
    return ( <div className = "pokemon-card">
        <div className = "pokemon-img-container"> 
            <img src = {pokemon.sprites.front_default} alt = {pokemon.name} />
        </div>
        <div className = "card-body"> 
            <div className = "card-top"> 
                <h3 className = "pokemon-name">{pokemon.name}</h3>
                <div className = "pokemon-id">#{pokemon.id}</div>
            </div>
        </div>
        
        <div className = "card-bottom">
            <div className = "pokemon-type"> 
                {pokemon.types.map((type, index) => {
                    return ( <div key = {index} className = "pokemon-type-text">{type.type.name}</div>
                    );
                })}
            </div>
            <button className="pokedex-btn" onClick={onheartClick}>
                {heart}
            </button>

        </div>
     </div>
    );
}

export default Pokemon;