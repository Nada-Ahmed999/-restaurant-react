import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMotorcycle, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'



export default function Footer() {

  let [size,setSize]=useState(window.innerWidth)

  
  
  

  return<>
  <div className='m-sm-auto pb-3 pt-4 d-md-flex justify-content-between px-5 position-absolute bg-menu w-100  '  style={{zIndex:"100"}}>

  <div>
  <FontAwesomeIcon icon={faFacebook}  className={`fs-5 mt-0 ms-3 text-color`}  />
  <FontAwesomeIcon icon={faInstagram} className=' fs-5 mt-0 ms-2 text-color ' />
  <FontAwesomeIcon icon={faTiktok} className='fs-5 mt-0  ms-2  text-color'  />
  <FontAwesomeIcon icon={faYoutube} className='fs-5 mt-0  ms-2 text-color' />
  <FontAwesomeIcon icon={faTwitter} className='fs-5 mt-0  ms-2 text-color'  />
    <p className='text-orange fw-bold'>Welcome to visit our sites</p>
  </div>

  <div>
  <FontAwesomeIcon icon={faPhoneVolume} className='fs-6 mt-0  ms-2 mb-1 text-orange'  />
    <span className='ms-4 fw-bold text-color' >01199554488</span>
  <div className='d-flex'>
  <FontAwesomeIcon icon={faMotorcycle} className='fs-5 mt-0  ms-2 mb-1 text-orange'  />
    <p  className='fw-bold text-color'>Fastest and best delivery</p>
  </div>
  </div>
  </div>
  </>
}
