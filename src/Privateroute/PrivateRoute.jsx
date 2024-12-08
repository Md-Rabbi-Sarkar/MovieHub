import React, { useContext } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'


export default function PrivateRoute({children}) {


    const {loading,user} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }

  return <Navigate to='/login'></Navigate>
}

