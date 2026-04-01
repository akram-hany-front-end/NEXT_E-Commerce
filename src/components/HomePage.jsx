"use client";
import React, { use } from 'react'
 import Banner from '@/components/Banner'
 import Bbc from '@/components/Bbc'
import Toogle from '@/components/Toogle' 
import Hero from '@/components/Hero'
import BigBanner from '@/components/BigBanner'

const HomePage = () => {
  return (
    <div>
         <Banner />
        <Bbc />
        <Toogle />
        <Hero />
        <BigBanner />
     </div>
  )
}

export default HomePage ;