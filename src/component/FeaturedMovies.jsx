import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function FeaturedMovies() {
  const [fetureds,setfetureds] = useState([])
useEffect(()=>{
  fetch("http://localhost:1000/fetured")
  .then(res =>res.json())
  .then(data=>setfetureds(data))
},[])
  return (
    <div className='grid grid-cols-3 gap-5  rounded-xl m-10 p-5'>
      {fetureds.map(fetured=><div key={fetured._id} className='border rounded-3xl p-5'>
        <img className='rounded-2xl w-full ' src={fetured.movieposter} alt="" />
         <p>Title: {fetured.movietitle}</p>
         <p>Genre: {fetured.genre}</p> 
         <p>Drration: {fetured.duration}</p>
         <p>Releaseyear: {fetured.releaseyear}</p>
          <p>Rating: {fetured.rating}</p>
          <button className='btn'><Link to={`/movies/${fetured._id}`}>Details</Link></button>

      </div>)}
    </div>
  )
}
