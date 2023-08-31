import React from 'react'

function Contact() { 
  return (
    <div className='abc container-fluid'>
      <div className=' contact con row' data-aos="fade-left" data-aos-duration="2000">
      <h1 className='mt-5 hdngs' id='five' >Contact</h1>
      </div>
      <div className=' contact con row' data-aos="fade-in" data-aos-duration="2000">
      <div className='banner-left col con footer'>
      <h3>ADDRESS</h3>
      <br></br>
<h5>Banasthali, Kathmandu</h5>
<h5>Bagmati, Nepal</h5>

<h5><i class="fas fa-phone"></i> +977 9869371390</h5>

<h5><i class="fas fa-phone"></i> +977 9866402429</h5>

<h5><i class="fas fa-envelope"></i><span style={{fontSize:'13px',paddingLeft:'5px'}}>yeemailagency@gmail.com</span></h5>
<br></br>
<h2>Follow Us</h2>
    <a href='https://www.instagram.com/yeemail0/' target='blank'>
      <i className="fab fa-instagram fa-2x ms-3 text-light"></i>
    </a>

      </div>  
    <div className='banner-right col footer'>     
<div class="mb-3 mt-4 foot">
  <h1>Want To Book A meeting with us?</h1>
</div>
<a href='https://calendly.com/yeemailagency/booked-call' target='blank'><button type="button" class="btn btn-outline-info mb-3" style={{width:'100%', height:'20%',borderRadius:'90px'}}><h2>Click Here</h2></button></a>
      </div>
      </div>
      <footer className='con contact mt-5'>
        <p>&copy;2023. Yeemail. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Contact