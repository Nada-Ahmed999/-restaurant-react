import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Home from '../Home/Home.jsx'
import Footer from '../footer/Footer.jsx'



export default function Layout() {
  return <>
  <Navbar/>
   <Outlet></Outlet>
   <Footer/>
  </>
}
