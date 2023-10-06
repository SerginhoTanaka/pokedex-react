import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componentes/NavBar";
import Searchbar from "./componentes/Searchbar";
import { searchPokemon} from "./api";

function App() {
  return (
    <div>
      <NavBar />
      <Searchbar/>
      <div className="App"></div>
    </div>
  );
}

export default App;
