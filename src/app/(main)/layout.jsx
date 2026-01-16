import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}

      <Footer></Footer>
    </div>
  )
}

export default MainLayout





