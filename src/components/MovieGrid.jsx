import React, { useState, useEffect } from 'react'
import logo from '../assets/New Project 1logo.png'


const MovieGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState([]);// FOR MODAL
  const [movies, setMovies] = useState([]); // FOR CARDS


  const API_KEY = 'https://api.themoviedb.org/3/movie/popular?api_key=59a8b9eb019fa806af94086412d50571';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=59a8b9eb019fa806af94086412d50571&query';


  const [query, setQuery] = useState(''); // SEARCH QUERY

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


  useEffect(() => {
    fetch(API_KEY)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])



  return (
    <>
      <div className='w-full flex justify-between '>
        <div className='mt-4'>
          <img src={logo} alt="logo" className='h-[54px] w-[156px]' />
        </div>
        <div className='mt-4'>

          <form onSubmit={searchMovie} >
            <label htmlFor="default-search" className=" text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input value={query} onChange={changeHandler}
                name="query"
                type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500" placeholder="Search Movies..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className='my-4 border-b-2'></div>
      <h1 className='text-2xl font-bold  my-8'>Most Recent Movies</h1>
      <div className='grid grid-cols-4 grid-rows-3 gap-20'>
        {
          movies.map((movies) =>
            <div key={movies.id} className=' h-auto  border border-white shadow-md rounded-lg max-w-[280px]'>
              <span className='absolute bg-white rounded-full p-3 ml-2 mt-2 border border-black'>
                {movies.vote_average}
              </span>
              <img src={IMG_URL + movies.poster_path} alt='movie poster' className='rounded-t-l ' />
              <div className='p-6'>
                <h1 onClick={() => {
                  setMovie(movies);
                  setShowModal(true)

                }}
                  className='text-sm cursor-pointer font-semibold text-center'>{movies.original_title}</h1>
              </div>
            </div>

          )}
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-[700px] p-3 mx-auto bg-white rounded-md shadow-lg">
                <h4 className="text-2xl ml-9 font-semibold text-gray-800 mb-6">
                  {movie.original_title}
                </h4>
                <div className="relative top-0 left-0 mr-4">
                  <button className="absolute top-[-56px]  right-0 z-10 p-1  text-white transition-colors duration-200 transform bg-red-500 rounded-full focus:outline-none focus:bg-red-400"
                    onClick={() =>
                      setShowModal(false)
                    }>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <img
                      src={IMG_URL + movie.poster_path}
                      alt="movie name"
                      className="w-full h-[400px] object-contain"
                    />

                  </div>
                  <div>
                    <p className="mt-3 ml-4 mr-4">
                      <span className="font-semibold">Release Date: </span>{movie.release_date}
                    </p>
                    <p className="mt-3 ml-4 text-[15px] leading-relaxed ">
                      {movie.overview}
                    </p>
                    <p className="mt-3 ml-4 mr-4">
                      <span className="font-semibold">{movie.vote_average}/10 </span>({movie.vote_count}votes)
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>

  )
}

export default MovieGrid