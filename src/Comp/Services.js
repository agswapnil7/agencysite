import React from 'react'

function Services() {
  return (
    <div className='abc container-fluid'>
      <div className='con row services' data-aos="fade-right" data-aos-duration="2000">
        <h1 className='mt-5 hdngs mb-5' id='three'>Services</h1>
      </div>
      <div className='row services' data-aos="fade-right" data-aos-duration="2000">
      <div className='banner-left col'>
        <h1>Email Template Design</h1>
        <h5>Our expert designers create eye-catching and mobile-responsive email templates that leave a lasting impression on your subscribers.</h5>
      </div>
      <div className='banner-right col'>
        <h1>Lead Nurturing</h1>
        <h5>Through carefully crafted email sequences, we nurture your leads, guiding them through the buying process and turning prospects into loyal customers.</h5>
      </div>
      </div>
      <div className='row services' data-aos="fade-left" data-aos-duration="2000">
        <div className='banner-left col'>
          <h1>Campaign Automation</h1>
          <h5>With automated workflows, we save you time and effort by sending timely, behavior-triggered emails that nurture leads and boost customer loyalty.</h5>
        </div>
        <div className='banner-right col'>
          <h1>A/B Testing</h1>
          <h5>We conduct rigorous A/B tests to identify the best-performing elements, ensuring your email campaigns are continually optimized for success.</h5>
        </div>
      </div>
      <div className='services row mb-5' data-aos="fade-right" data-aos-duration="2000">
        <div className='banner-left col'>
          <h1>Email Copy Optimization</h1>
          <h5>We carefully craft persuasive and compelling email copy that resonates with your audience and compels them to take action.</h5>
        </div>
        <div className='banner-right col'>
          <h1>List Cleaning</h1>
          <h5>We regularly clean and manage your email lists to eliminate invalid addresses and improve overall deliverability and engagement rates.</h5>
        </div>
        </div>
        <div className='services row mb-5' data-aos="fade-left" data-aos-duration="2000">
        <div className='banner-left col'>
          <h1>Deliverability Management</h1>
          <h5>Our deliverability experts maintain high inbox placement rates, ensuring your emails reach the intended recipients effectively.</h5>
        </div>
        <div className='banner-right col'>
          <h1>Tracking results</h1>
          <h5>Our detailed analytics provide valuable insights into your email campaigns, empowering data-driven decisions for continuous improvement.</h5>
        </div>
        </div>
    </div>
  )
}

export default Services
