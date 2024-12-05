import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Allmovies() {
  const lodadmovies = useLoaderData();
  const [movies,setmovies] = useState(lodadmovies)
  console.log(movies)
  return (
    <div>
      {movies?.map(movie=><div key={movie._id}><p>{movie.movietitle}</p><button className='btn'><Link to={`/movies/${movie._id}`}>Details</Link></button></div>)}
    </div>
  )
}
