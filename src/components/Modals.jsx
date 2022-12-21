import React from 'react'
import { UseModal } from '../context/ModalContext'
import { IMG_URL } from '../api/MovieApi.js'
import { UseMovies } from '../context/MoviesContext'
import { GetMovies } from '../api/MovieApi.js'

const Modals = () => {
    const { setShowModal } = UseModal();
    const { movie} = UseMovies();
    GetMovies()

    return (
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
                                <span className="font-semibold">{movie.vote_average} /10 </span>({movie.vote_count}votes)
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modals