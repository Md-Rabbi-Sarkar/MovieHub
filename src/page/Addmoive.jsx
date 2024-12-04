import React from 'react'

export default function Addmoive() {
    const handlesubmit =(e) =>{

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
            <input type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
