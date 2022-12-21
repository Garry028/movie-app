import React from 'react'
import { UseModal } from '../context/ModalContext'
import { UseMovies } from '../context/MoviesContext'
import { IMG_URL, } from '../api/MovieApi.js'
import Navbar from './Navbar'
import Modals from './Modals'
import { GetMovies } from '../api/MovieApi.js'


const MovieGrid = () => {
  const { showModal, setShowModal } = UseModal();
  const { movies, setMovie } = UseMovies();

  GetMovies();

  return (
    <>
      <Navbar />
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
          <Modals />
        </>
      ) : null}
    </>

  )
}

export default MovieGrid