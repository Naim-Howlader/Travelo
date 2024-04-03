import React from 'react'
import Header from '../pages/server/partials/Header'
import Footer from '../pages/server/partials/Footer'
import Sidebar from '../pages/server/partials/Sidebar'
import { Outlet } from 'react-router-dom'
export default function ServerLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
