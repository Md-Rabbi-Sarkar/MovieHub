import React, { useEffect, useState } from 'react'
import Slider from '../component/Slider'
import FeaturedMovies from '../component/FeaturedMovies'
import Blogs from './Blogs'
import News from '../component/News'
export default function Home() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className='App'>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
      </div>
      <Slider></Slider>
      <FeaturedMovies></FeaturedMovies>
      <Blogs></Blogs>
      <News></News>
    </div>
  )
}
