import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function FeaturedMovies() {
  const [fetureds,setfetureds] = useState([])
useEffect(()=>{
  fetch("http://localhost:1000/favorite")
  .then(res =>res.json())
  .then(data=>setfetureds(data))
},[])
  return (
    <div>
      {fetureds.map(fetured=><p key={fetured._id}>{fetured.movietitle}</p>)}
    </div>
  )
}
