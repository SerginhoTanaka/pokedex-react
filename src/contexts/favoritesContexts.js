import React from "react";
const FavoritesContext = React.createContext(
    {
        favorites: [],
        updateFavorites: (id) => null 
    }
    );
export const FavoritesProvider = FavoritesContext.Provider;

export default FavoritesContext;