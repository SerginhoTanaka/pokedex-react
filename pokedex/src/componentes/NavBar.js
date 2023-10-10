import React, { useContext } from "react";
import FavoritesContext from "../contexts/favoritesContexts";	

const NavBar = () => {
  const { favorites } = useContext(FavoritesContext);
  const logoimg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <nav>
        <div>
          <img className="navbar-img" alt="pokeapi-logo" src={logoimg} />
        </div>
        <div> {favorites.length} ❤️ </div>
      </nav>
    </div>
  );
};

export default NavBar;
