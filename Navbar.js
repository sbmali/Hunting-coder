import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const Navbar = () => {
  return (
      <nav className={styles.mainnav}>
        <ul >
          <Link href='/'><li className={styles.navItem}>Home</li></Link>
          <Link href='/about'><li className={styles.navItem}>About</li></Link>
          <Link href='/blog'><li className={styles.navItem}>Blog</li></Link>
          <Link href='/contact'><li className={styles.navItem}>Contact</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar
