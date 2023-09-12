import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>梵华莲花</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
