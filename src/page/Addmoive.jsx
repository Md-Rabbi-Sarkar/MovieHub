import React from 'react'

export default function Addmoive() {
    const handlesubmit =(e) =>{
      e.preventDefault();
      const input = e.target
      const movieposter = input.movieposter.value 
      const movietitle = input.movietitle.value 
      const genre = input.genre.value 
      const duration = input.duration.value 
      const releaseyear = input.releaseyear.value 
      const rating = input.rating.value 
      const email = input.email.value 
      const allinput = {movieposter,movietitle,genre,duration,releaseyear,rating,email}
      // console.log(allinput)
      fetch('http://localhost:1000/addmovie',{
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(allinput)
      })
      .then(res =>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
          alert('Successfully add phone')
          input.reset()
        }        
      })
    }
  return (
    <div  className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Add movie</h1>
        
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlesubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Poser</span>
            </label>
            <input type="text" placeholder="Movie Poster" name="movieposter" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input type="text" placeholder="Movie Title" name="movietitle" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input type="text" placeholder="Genre" name='genre' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input type="text" placeholder="Duration" name='duration' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <input type="text" placeholder="Release Year" name='releaseyear' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Summary" name='summary'></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
