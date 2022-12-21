import React, { useState, createContext, useContext } from "react";
import { API_SEARCH } from "../api/MovieApi";
import { UseMovies } from "./MoviesContext";

export const SearchContext = createContext(null);

export function UseSearch() {
    return useContext(SearchContext);
}

function SearchProvider({ children }) {

    const { setMovies } = UseMovies();

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `${API_SEARCH}=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }


    const [query, setQuery] = useState('');
    return (
        <SearchContext.Provider value={{ query, setQuery, searchMovie, changeHandler }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;