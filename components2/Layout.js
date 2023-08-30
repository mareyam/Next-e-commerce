import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import { Aestroid } from './Aestroid'


const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Aestroid/>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Layout