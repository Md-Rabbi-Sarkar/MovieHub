import React from 'react'
import { useLoaderData ,Link } from 'react-router-dom'

export default function Movie() {
    const movie = useLoaderData()
  return (
    <div>
        <p>{movie.movietitle}</p>
        <div>
        <button className='btn'>Update</button>
        <button className='btn'>Delete</button>
        <button className='btn'>Add to faverite</button>
        <button className='btn'><Link to='/allmovies'> See All movie</Link></button>
        </div>
    </div>
  )
}
