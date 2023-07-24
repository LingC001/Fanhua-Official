import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>梵华莲花</title>
        <link rel="icon" href="/logo.png" />
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
