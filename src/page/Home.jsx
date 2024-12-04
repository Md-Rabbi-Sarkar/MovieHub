import React from 'react'
import Slider from '../component/Slider'
import FeaturedMovies from '../component/FeaturedMovies'
import Blogs from '../component/Blogs'
import News from '../component/News'
export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <FeaturedMovies></FeaturedMovies>
      <Blogs></Blogs>
      <News></News>
    </div>
  )
}
