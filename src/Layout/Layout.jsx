import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function Layout() {
    const location = useLocation()
    return (
        <div>
            <Navbar />
            {location.pathname === '/' && <Home />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
