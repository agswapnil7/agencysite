import React from 'react'
import email from './email.jpg';
import ReviewsData from '../Data/ReviewsData';
import { Carousel } from 'react-bootstrap';
function About() {
  return (
    <div className='abc'>
    <div className=' contact con row' id='two' data-aos="fade-left" data-aos-duration="2000">
    <h1 className='mt-5 hdngs mb-5' >Know Us More</h1>
      <div className='banner-left col'>
        <h1 className='mt-2'style={{ fontSize:'30px'}} >We are <span style={{color:'skyblue'}}>Yeemail</span>, a Email Marketing Agency.</h1>
        <p className='mt-3' style={{color:'#BEC2C3', fontSize:'20px'}}>Yeemail is a dynamic email marketing agency based in Kathmandu, Nepal. Our team is passionate about crafting personalized and data-driven email campaigns that deliver real results. With expertise in Klaviyo, we optimize campaigns for efficiency and impact. From seamless segmentation to powerful analytics, we have the tools to take your email marketing to the next level.</p>
        <p className='mt-3' style={{color:'#BEC2C3', fontSize:'20px'}}>Partner with us today and propel your business forward with effective email strategies. Contact us now to discuss your email marketing needs and start connecting with your audience on a whole new level.</p>
    </div>  
    <div className='banner-right col'>
        <div className='mt-5'>
          <img src={email} height={'250px'} width={'300px'}></img>
        </div> 
      </div>
      <div>
  <h2 className='mb-5 rev'>Customer Reviews</h2>
  <Carousel style={{ alignItems:'center'}}>
    {ReviewsData.map((review, id) => (
      <Carousel.Item key={id}>
        <p style={{background:'maroon', borderRadius:'40px', padding:'30px'}}>"{review.review}"</p>
        <p>- {review.name}</p>
        <br></br>
      </Carousel.Item>
    ))}
  </Carousel>

</div>
      <div className='con mb-5'>
    <h2>Follow Us</h2>
    <p>Connect with us on social media:</p>

    <a href='https://www.instagram.com/yeemail0/' target='blank'>
      <i className="fab fa-instagram fa-2x ms-3 text-light"></i>
    </a>
    </div>
      </div>
      </div>
  )
}

export default About