import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Favoritemovie() {
  const lodedfaverite = useLoaderData()
  const [favorites,setfavorite] = useState(lodedfaverite)
  const handledelete =(id) =>{
    fetch(`http://localhost:1000/favorite/${id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        alert('successfull')
        const array = Object.values(favorites)
        const reamining = array.filter(movie=>movie._id !==id);
        setfavorite(reamining)
        
    }
      }
    )
  }


  
  return (
    <div className='grid grid-cols-3 gap-5 border rounded-xl m-10 p-5'>
      {favorites.map(favorite=>
      <div>
        <img className='rounded-2xl w-full ' src={favorite.movieposter} alt="" />
         <p>Title: {favorite.movietitle}</p>
         <p>Genre: {favorite.genre}</p> 
         <p>Drration: {favorite.duration}</p>
         <p>Releaseyear: {favorite.releaseyear}</p>
          <p>Rating: {favorite.rating}</p>
        <button onClick={() => handledelete(favorite._id)} className='btn'>Delete Favorite</button>
        </div>)}
    </div>
  )
}
