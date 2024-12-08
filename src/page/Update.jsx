import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

export default function Update() {
     const singlemovie = useLoaderData();
     const {user} = useContext(AuthContext)
     const { register, handleSubmit } = useForm();
    const onSubmit =(e) =>{
       
      if (!e.movietitle || e.movietitle.length < 2) {
        toast.error("Input must 2 charecter")
        return;
      }
      if (!e.genre) {
        toast.error("Please select a genre.");
        return;
      }
      if (isNaN(e.duration) || !e.duration || e.duration <= 60) {
        toast.error("Duration must be greater than 60 minutes.");
        return;
      }
      if (!e.releaseyear) {
        toast.error("Please select a release year.");
        return;
      }
      if (e.rating === 0) {
        toast.error("Please select a rating.");
        return;
      }
      if (!e.summary || e.summary.length < 10) {
        toast.error("Summary must have at least 10 characters.");
        return;
      }
      if(!e.email){
        toast.error('give your email')
      }
      
      fetch(`https://movie-hub-server-phi.vercel.app/movies/${singlemovie._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(e)
      })
      .then(res =>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          toast('successfully updated')
          
        }        
      })
    }
  return (
    <div  className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Update Movie</h1>
        
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Poser</span>
            </label>
            <input type="text" placeholder="https://example.com" {...register("movieposter")} pattern="https://.*" title='Must have a link' className="input input-bordered" defaultValue={singlemovie.movieposter} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input type="text" placeholder="Movie Title" {...register("movietitle")} defaultValue={singlemovie.movietitle} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select {...register("genre")} className='border p-3 rounded-lg'>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Action">Action</option>
              </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input type="number" placeholder="Duration" {...register('duration')} defaultValue={singlemovie.duration} className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <select{...register("releaseyear")} className='border p-3 rounded-lg'>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" placeholder="Rating" {...register('rating')}defaultValue={singlemovie.rating} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Summary"{...register('summary')} defaultValue={singlemovie.summary}></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input {...register('email')}defaultValue={user.email} type="email" placeholder="email" className="input input-bordered"  />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Movie</button>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  </div>
  )
}
