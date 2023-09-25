import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

import Login from "../login/login"
import Signup from "../login/signup"

const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/reg' element={<Signup/>} />
        </Routes>
          
        
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/property' element={<Blog />} />
          <Route exact path='/contact' element={<Contact/>} />
          
        </Routes>
       
      </Router>
    </>
  )
}

export default Pages