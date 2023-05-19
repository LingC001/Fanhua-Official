import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
const Index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Index
