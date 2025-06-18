import React from 'react'
import Navbar from "@/components/Navbar"
import Slider from "@/components/Slider"
import Footer from '@/components/Footer'
// import Quotes from "@/components/Quotes"
import Promotion from '@/components/Promotion'
import Testimony from "@/components/Testimony"
import CallToAction from '@/components/CallToAction'
import QuickActions from "@/components/QuickActions"
import FeaturedBooks from '@/components/FeaturedBooks'
import PopularGroups from "@/components/PopularGroups"
import FeaturedArticles from '@/components/FeaturedArticles'
import NewsLetter from '@/components/NewsLetter'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div >
        <Slider />
        <QuickActions />
        <FeaturedArticles />
        <CallToAction />
        <FeaturedBooks />
        {/* <Quotes /> */}
        <PopularGroups />
        <Testimony />
        <Promotion/>
        <NewsLetter/>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
