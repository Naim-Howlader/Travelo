import React from 'react'
import Header from '../pages/client/partials/Header'
import Footer from '../pages/client/partials/Footer'
import { Outlet } from 'react-router-dom'
export default function ClientLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}
