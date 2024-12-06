import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Provider/AuthProvider'
import { Result } from 'postcss';
import { AuthContext } from '../provider/AuthProvider';

export default function Nav() {
  const { user, logoutaccount } = useContext(AuthContext)

  // console.log(user)
  const handleLogOut = () => {
    logoutaccount()
      .then(result => console.log(result))
      .catch(error => console.log(error.messege))
  }
  return (
    <div className="navbar bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/'><a>Home</a></Link></li>

          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><Link to='/'>Movie Hub</Link></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'><a>Home</a></Link></li>
          <li><Link to='/allmovies'><a>All movies</a></Link></li>
          <li><Link to='/blogs'><a>Blog</a></Link></li>
          <li><Link to='/newses'><a>News</a></Link></li>
         
         
        </ul>
      </div>

      <div className="navbar-end">

        {user ?<> <NavLink to='/addmovie' className='btn mr-2'>Add Movie</NavLink> <NavLink to={`/favorite/${user.email}`} className='btn mr-2'>MY fevetaite</NavLink><a onClick={handleLogOut} className="btn">LogOut</a></>  :<><Link to='login'><a className="btn">Login</a></Link><Link to='register'><a className="btn">Register</a></Link></> }
        <div className='relative group ml-2'><img className='w-10 rounded-xl' src={user?.photoURL} alt="" />
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
            bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 
            group-hover:opacity-100 transition-opacity duration-300">
            {user?.displayName}
          </div></div>
      </div>
    </div>
  )
}
