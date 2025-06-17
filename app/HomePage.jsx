import React from 'react'
import Navbar from "@/components/Navbar"
import Slider from "@/components/Slider"
import Footer from '@/components/Footer'
import Quotes from "@/components/Quotes"
import QuickActions from "@/components/QuickActions"
import FeaturedBooks from '@/components/FeaturedBooks'
import PopularGroups from "@/components/PopularGroups"
import Testimony from "@/components/Testimony"
import FeaturedArticles from '@/components/FeaturedArticles'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='px-6 md:px-16 lg:px-32'>
        <Slider />
        <QuickActions />
        <FeaturedArticles />
        <FeaturedBooks />
        <Quotes />
        <PopularGroups />
        <Testimony />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
