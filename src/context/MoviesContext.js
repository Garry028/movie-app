import React, { useState, createContext, useContext } from "react";

export const MoviesContext = createContext(null);

export function UseMovies() {
    return useContext(MoviesContext);
}

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    return (
        <MoviesContext.Provider value={{ movies, setMovies, movie, setMovie }}>
            {children}
        </MoviesContext.Provider>
    )
}
export default MoviesProvider;