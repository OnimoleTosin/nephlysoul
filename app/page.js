import React from 'react'
import Navbar from "@/components/Navbar"
import Slider from "@/components/Slider"
import Footer from '@/components/Footer'
import FeaturedArticles from '@/components/FeaturedArticles'

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Slider />
        <FeaturedArticles/>
      </div>
      <Footer/>
    </>
  )
}

export default page
