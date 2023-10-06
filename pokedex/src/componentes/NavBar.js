import React from "react";

const NavBar = () => {
  const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <div>
      <nav>
        <div>
          <img alt="pokeapi-logo" src={logoimg} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
