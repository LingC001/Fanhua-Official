import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
