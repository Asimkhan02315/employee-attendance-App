import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  
    let loggedIn = true    

if(loggedIn) {
    return <Outlet />
}else{
    return <Navigate to='/Table' />
}
}
export default PrivateRoute