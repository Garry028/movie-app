import { useEffect } from "react";
import { UseMovies } from "../context/MoviesContext";

export const API_KEY = 'https://api.themoviedb.org/3/movie/popular?api_key=59a8b9eb019fa806af94086412d50571';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=59a8b9eb019fa806af94086412d50571&query';



export const GetMovies = () => {
    const { setMovies } = UseMovies();

    useEffect(() => {
        fetch(API_KEY)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })
    }, [])
}