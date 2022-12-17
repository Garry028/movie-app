import React from 'react'
import Navbar from '../components/Navbar'
import MovieGrid from '../components/MovieGrid'

function HomePage() {
    return (
        <div className='mx-16'>
            <Navbar />
            <div className='my-4 border-b-2'></div>
            <h1 className='text-2xl font-bold  my-8'>Most Recent Movies</h1>
            <MovieGrid />
        </div>
    )
}

export default HomePage