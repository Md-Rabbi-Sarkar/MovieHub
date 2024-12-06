import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Allmovies() {
  const lodadmovies = useLoaderData();
  const [movies,setmovies] = useState(lodadmovies)
  // console.log(movies)
  return (
    <div className='grid grid-cols-3 gap-5 border rounded-xl m-10 p-5  '>
      {movies?.map(movie=><div key={movie._id}> 
        <img className='rounded-2xl w-full h-auto ' src={movie.movieposter} alt="" />
         <p>Title: {movie.movietitle}</p>
         <p>Genre: {movie.genre}</p> 
         <p>Drration: {movie.duration}</p>
         <p>Releaseyear: {movie.releaseyear}</p>
          <p>Rating: {movie.rating}</p>
          <button className='btn'><Link to={`/movies/${movie._id}`}>Details</Link></button>
          </div>)}
    </div>
  )
}
