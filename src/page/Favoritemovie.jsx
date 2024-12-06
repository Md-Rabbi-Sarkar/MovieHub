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
    <div>{favorites.length}
      {favorites.map(favorite=><p><button onClick={() => handledelete(favorite._id)} className='btn'>Delete Favorite</button></p>)}
    </div>
  )
}
