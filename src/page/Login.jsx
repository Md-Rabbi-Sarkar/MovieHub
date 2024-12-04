import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../provider/AuthProvider';

export default function Login() {
  const notify = (e) => toast(e);
  const {signinwithemail,user,SetLoading,signinwithgoogle} =useContext(AuthContext);
  const Navigate = useNavigate()
const handlesubmit =(e)=>{
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.password.value
  signinwithemail(email,password)
  
  .then( result=>{
    console.log(result)
    e.target.reset()
     Navigate('/')
  })
  .catch(error=>{
    console.log(error.message)

  })  

}
const signGoogle =()=>{
  signinwithgoogle()
  .then( result=>{
    console.log(result)
    Navigate('/')
  })
  .catch(error=>{
    console.log(error.message)

  })

 
    
}
  return (
    <div className="hero bg-base-200 min-h-screen">
      <ToastContainer />
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
       
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlesubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className='flex'>
            <p>If you new go to</p>
            <Link to= '/register'><button className='rounded bg-slate-200 p-1'>Register</button></Link>
          </div>
          <div className="form-control mt-6">
            <button onClick={signGoogle} className="btn btn-primary">With Google</button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
