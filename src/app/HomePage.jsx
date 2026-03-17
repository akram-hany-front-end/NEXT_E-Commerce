import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Bbc from '@/components/Bbc'
import Toogle from '@/components/Toogle' 
import Hero from '@/components/Hero'
import BigBanner from '@/components/BigBanner'

const HomePage = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Bbc />
        <Toogle />
        <Hero />
        <BigBanner />
        <Footer />
    </div>
  )
}

export default HomePage