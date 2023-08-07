import React from 'react'
import Flow1 from './Flow1.png';
import Flow2 from './Flow2.png'
function Strategy() {
  return (
    <div className='abc container-fluid'>
    <div className=' contact con row' id='four' data-aos="fade-left" data-aos-duration="2000">
    <h1 className='mt-5 hdngs mb-5'  >Our Strategies</h1>
    <h1 className='con services'  data-aos="fade-right" data-aos-duration="2000">Our Approach</h1>
    <img src={Flow1} className='mt-5 mb-5' data-aos="fade-left" data-aos-duration="2000"></img>
    <img src={Flow2} className='mt-5 mb-5' data-aos="fade-right" data-aos-duration="2000"></img>
    </div>
    </div>
  )
}

export default Strategy