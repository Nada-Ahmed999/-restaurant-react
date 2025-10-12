import React from 'react'


export default function Home() {
 

  return <>

   <div className='contentAll '>
<div className="app">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="../../public/video/offer.mp4" type="video/mp4" className='position-absolute' />
      </video>

  </div>
  <div className="content lobster-two-bold position-absolute end-0 p-5">
        <h1>enjoy The Tastic Meals And Drinks at Bloom House</h1>
      </div>
       
   </div>
     
  </>
}
