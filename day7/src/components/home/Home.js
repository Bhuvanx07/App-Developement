import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"


const Home = () => {
  return (
    <>
      <div>
      <Header/>
      </div>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      {/* <Team />
      <Price /> */}
      <div>
      <Footer />
      </div>
    </>
  )
}

export default Home