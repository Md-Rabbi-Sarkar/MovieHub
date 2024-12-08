import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import 'animate.css';
// import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';


export default function Register() {
   const navigat = useNavigate()
  const {signinwithgoogle,user,loading,setoading,createuserwithemail} =useContext(AuthContext)
  
const handlesubmit =(e)=>{
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.password.value
  
  createuserwithemail(email,password)
  .then( result=>{
    console.log(result)
     navigat('/')
  })
  .catch(error=>{
    toast(error.message)
  
  }) 
}

  const signGoogle =()=>{
    signinwithgoogle()
    .then( result=>{
      console.log(result)
      navigat('/')
    })
    .catch(error=>{

      toast(error.message)
    })

   
      
  }
  return (
    <div  className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <ToastContainer></ToastContainer>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlesubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" placeholder="Your Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one uppercase and lowercase letter, and at least 6 or more characters" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className='flex'>
            <p>Already have account</p>
            <Link to= '/login'><button className='rounded bg-slate-200 p-1'>login</button></Link>
          </div>
          <div className="form-control mt-6">
            <button onClick={signGoogle} className="btn btn-primary">With Google</button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
