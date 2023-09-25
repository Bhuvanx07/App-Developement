import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Blog = () => {
  return (
    <>
      <div>
      <Header/>
      </div>
      <section className='blog-out mb'>
        <Back name='property' title='Find Your Place' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
      <div>
      <Footer />
      </div>
    </>
  )
}

export default Blog
