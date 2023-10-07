import "./App.css";
import NavBar from "./componentes/NavBar";
import Searchbar from "./componentes/Searchbar";
import {searchPokemon} from "./api";
import Pokedex from "./componentes/Pokedex";

function App() {

  const onSearchhandler = async (pokemon) => {
    const response = await searchPokemon(pokemon)
    console.log(response)
  }
  return (
    <div>
      <NavBar />
      <Searchbar
        onSearch ={onSearchhandler}
      />
      <Pokedex />
      <div className="App"></div>
    </div>
  );
}

export default App;
