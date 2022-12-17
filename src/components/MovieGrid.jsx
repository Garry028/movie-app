import React, { useState } from 'react'
import movie1 from "../assets/movie1.png"

const MovieGrid = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='grid grid-cols-4 grid-rows-3 gap-20'>
        <div className=' h-auto  border border-white shadow-md rounded-lg max-w-[280px]'>
          <span className='absolute bg-white rounded-full p-3 ml-2 mt-2 border border-black'>
            8.8
          </span>
          <img src={movie1} alt='movie poster' className='rounded-t-l ' />
          <div className='p-6'>
            <h1 onClick={() => setShowModal(true)}
              className='text-sm cursor-pointer font-semibold text-center'>Cruella</h1>
          </div>
        </div>
        <div className='bg-white h-auto rounded-lg  border border-white shadow-md max-w-[280px]'>
          <span className='absolute bg-white rounded-full p-3 ml-2 mt-2 border border-black'>
            8.8
          </span>
          <img src={movie1} alt='movie poster' className='rounded-t-lg' />
          <div className='p-6'>
            <h1 onClick={() => setShowModal(true)}
              className='text-sm cursor-pointer font-semibold text-center'>Cruella</h1>
          </div>
        </div>
        <div className='bg-white h-auto rounded-lg  border border-white shadow-md max-w-[280px]'>
          <span className='absolute bg-white rounded-full p-3 ml-2 mt-2 border border-black'>
            8.8
          </span>
          <img src={movie1} alt='movie poster' className='rounded-t-l ' />
          <div className='p-6'>
            <h1 onClick={() => setShowModal(true)}
              className='text-sm cursor-pointer font-semibold text-center'>Cruella</h1>
          </div>
        </div>
        <div className='bg-white h-auto rounded-lg  border border-white shadow-md max-w-[280px]'>
          <span className='absolute bg-white rounded-full p-3 ml-2 mt-2 border border-black'>
            8.8
          </span>
          <img src={movie1} alt='movie poster' className='rounded-t-lg' />
          <div className='p-6'>
            <h1 onClick={() => setShowModal(true)}
              className='text-sm cursor-pointer font-semibold text-center'>Cruella</h1>
          </div>
        </div>
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
                  Army Of The Dead
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
                      src="https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg"
                      alt="Army Of The Dead"
                      className="w-full h-[400px] object-contain"
                    />

                  </div>
                  <div>
                    <p className="mt-3 ml-4 mr-4">
                      <span className="font-semibold">Release Date: </span>May 21, 2021
                    </p>
                    <p className="mt-3 ml-4 text-[15px] leading-relaxed ">
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <p className="mt-3 ml-4 mr-4">
                      <span className="font-semibold">8.8/10 </span>(1,000,000 votes)
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