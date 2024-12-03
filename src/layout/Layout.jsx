import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Nav from '../component/Nav'



export default function Layout() {
  return (
    <div>
        <Nav></Nav>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}
