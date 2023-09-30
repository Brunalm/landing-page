"use client"

import React from 'react'
import styles from './page.module.css'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Benefits from '@/components/benefits'
import DownloadApp from '@/components/downloadApp'
import Plans from '@/components/plans'
import ContactUs from '@/components/contact'

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
     <Banner />
     <Benefits />
     <DownloadApp />
     <Plans />
     <ContactUs />
    </main>
  )
}
