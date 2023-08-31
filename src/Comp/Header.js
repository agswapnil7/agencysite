import React from 'react'
import Typewriter from 'typewriter-effect';
import mylogo from './mylogo.jpg';
function Header() {
    return (
        <div className='abc container-fluid' data-aos="zoom-out" data-aos-duration="2000">
            <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
      <a className="navbar-brand" to="#">
          <img src={mylogo} alt="Logo" width="180" height="160" className="d-inline-block align-text-top mt-3 logo"/>
        </a>
    
        <button className="navbar-toggler-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>     
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-between fs-6 fw-semibold p-2">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#two">ABOUT US</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#three">SERVICES</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#four">OUR STRATEGY</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link text-light" href="#five">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className='headicon'>
        <a href ='https://www.instagram.com/yeemail0/' target='blank'>
          <i className="fab fa-instagram  ms-4 text-light gg"></i>
        </a>
        </div>
        </div>
    </nav>
    <div className='container-fluid'>
        <div className='row aa'  data-aos-duration="2000">
        <div className='banner-left col' data-aos="fade-right" data-aos-duration="2000">
        <div className="text-center bb">
          <h2>Welcome</h2>
          <div className='typewriter'>
          <Typewriter
          options={{
            strings: ['We are Yeemail', 'We design your emails', 'We increase your revenue'],
            autoStart: true,
            loop: true,}}
  />
  </div>
          <h2>From Kathmandu, Nepal</h2>
          <button type="button" class="btn btn-outline-info"><a href= '#five' >Book a meeting with us</a></button>
    </div> 
        </div>
        
        </div>
    </div>
    
    </div>
      )
    }
    
export default Header

