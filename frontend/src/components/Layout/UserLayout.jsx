import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        {/* header section  */}
        <Header></Header>

        {/* main content  */}
        <main>
          <Outlet/>
        </main>

        {/* Footer section  */}
        <Footer/>
    </>
  )
}

export default UserLayout