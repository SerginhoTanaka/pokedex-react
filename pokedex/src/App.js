import React, { useEffect, useState } from "react";
import "./App.css";
import { getPokemons, getPokemonData ,searchPokemon} from "./api";
import NavBar from "./componentes/NavBar";
import Searchbar from "./componentes/Searchbar";
import Pokedex from "./componentes/Pokedex";
import { FavoritesProvider } from "./contexts/favoritesContexts";

const favoriteKey = "f";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const loadFavorites = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || [];
    setFavorites(pokemons);
  };
  useEffect(() => {
    loadFavorites();
  }, [page]);

  useEffect(() => {
    console.log("useEffect");
    fetchPokemons();
  }, [page]);

  const updateFavoritesPokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updated));
    setFavorites(updated);
  };
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();

    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      }else{
        setPokemons([result])
        setPage(0);
        setTotalPages(1);
      }
      setLoading(false);

  }
  return (
    
    <>
    <body>
    <FavoritesProvider
      value={{ favorites: favorites, updateFavorites: updateFavoritesPokemons }}
    >
      <div className="background-pokemon">
        <NavBar />
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <div className="not-found">Pokemon não encontrado</div>
        ) : null}	
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
        <div className="App"></div>
      </div>
    </FavoritesProvider>
    </body>
    </>
  );
}
export default App;
