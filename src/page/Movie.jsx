import React, { useContext, useState } from 'react'
import { useLoaderData ,Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

export default function Movie() {
    const lodedmovie = useLoaderData()
    const neviget = useNavigate()
    const {handleadded} = useContext(AuthContext)
    const [movies,setmovies] = useState(lodedmovie)
    const handledelete =(id) =>{
        fetch(`http://localhost:1000/movies/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())

        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('successfull')
                const array = Object.values(movies)
                const reamining = array.filter(movie=>movie._id !==id);
                setmovies(reamining)
                neviget('/')
            }
        })
    }
    return (
    <div className='mx-auto text-center my-10  '>
        <img className='rounded-xl w-1/2 mx-auto my-10' src={movies.movieposter} alt="" />
        <div className='space-x-5'>
        <button className='btn'><Link to={`/movie/${movies._id}`}>Update</Link></button>
        <button onClick={()=>handledelete(movies._id)} className='btn'>Delete</button>
        <button onClick={()=>handleadded(movies._id)} className='btn'>Add to faverite</button>
        <button className='btn'><Link to='/allmovies'> See All movie</Link></button>
        </div>
    </div>
  )
}
