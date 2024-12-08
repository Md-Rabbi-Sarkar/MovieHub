import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Allmovies() {
  const lodadmovies = useLoaderData();
  const [movies, setmovies] = useState(lodadmovies)
  const [filteredmovie, setfilteredmovie] = useState(lodadmovies)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = movies.filter((movie) => movie?.movietitle.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setfilteredmovie(results)
  }, [searchTerm, movies])

  return (
    <div>
      <div className='mx-auto text-center my-8 space-x-3 '>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <div className='grid grid-cols-3 gap-5 borde rounded-xl m-10 p-5  '>

        {filteredmovie.length > 0 ? (
          filteredmovie.map((movie) => (
            <div key={movie._id} className='border rounded-3xl p-5'>
              <img className='rounded-2xl w-full h-auto ' src={movie.movieposter} alt="" />
              <p>Title: {movie.movietitle}</p>
              <p>Genre: {movie.genre}</p>
              <p>Drration: {movie.duration}</p>
              <p>Releaseyear: {movie.releaseyear}</p>
              <p>Rating: {movie.rating}</p>
              <button className='btn'><Link to={`/movies/${movie._id}`}>Details</Link></button>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
        
      </div>
    </div>

  )
}
