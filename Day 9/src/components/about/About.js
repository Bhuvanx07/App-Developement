import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const About = () => {
  return (
    <>
      <div>
      <Header/>
      </div>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>  Welcome to the RentUp , a comprehensive solution for managing properties, tenants, and rental transactions. Our system is designed to streamline and automate various real estate management tasks, helping property owners, managers, and agents to efficiently handle their operations.The companies must comply with any state and local landlord-tenant laws and regulations.
        Real estate management is utilized for any type of rental property, including residential rentals or commercial real estate. Our company helps manage the daily operations of the rental property or portfolio of properties on behalf of the landlord.
        Good management of properties ensures the safety of other tenants. You are responsible for screening applications and preventing the securing of a lease by any suspicious tenants. You do have the duty to protect your tenants from crime and other possible hazards.
        One of the most important aspects of our website is maintaining good relationships with residents and owners.</p>
            
            <button className='btn2'>More About Us</button>
          </div>
          {/* <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div> */}
        </div>
      </section>
      <div>
      <Footer />
      </div>
    </>
  )
}
export default About
