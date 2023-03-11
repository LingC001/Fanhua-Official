import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
