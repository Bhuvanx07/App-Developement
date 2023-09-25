import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { useSelector } from "react-redux";


function Hero  ()  {
  const Username=useSelector((state)=>state.name);
  
  return (
    <>
      <section className='hero'>
        <div className='container'>
        <p className="red">Welcome,{Username}</p>
         
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
