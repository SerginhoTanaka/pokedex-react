import React from "react";

export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/ditto/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }
    catch(error){
        console.log("error:",error )
    }
}