import React, {useEffect, useState} from "react";
import "./App.css";
import NavBar from "./componentes/NavBar";
import Searchbar from "./componentes/Searchbar";
import { searchPokemon, getPokemons, getPokemonData } from "./api";
import Pokedex from "./componentes/Pokedex";


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

   
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
  }
};
  useEffect(() => {
    console.log("useEffect");
    fetchPokemons();
  }, []);

  const onSearchhandler = async (pokemon) => {
    const response = await searchPokemon(pokemon);
    console.log(response);
  };
  return (
    <div>
      <NavBar />
      <Searchbar />
      <Pokedex pokemons = {pokemons} loading = {loading}/>
      <div className="App"></div>
    </div>
  );
}

export default App;
