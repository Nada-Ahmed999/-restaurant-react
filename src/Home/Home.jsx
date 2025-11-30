import React, { useState } from 'react'



export default function Home() {
 let [size,setSize]=useState(window.innerWidth)


  return <>

   <div className='contentAll '>
<div className={`${size < 992?'h-app':'app'}`}>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="../../public/video/offer.mp4" type="video/mp4" className='position-absolute' />
      </video> */}

      <img src="https://as2.ftcdn.net/v2/jpg/04/76/57/27/1000_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg" alt="" className={`position-absolute bg-video ${size<992?'py-5 my-5':''}`}  />

  </div>
  <div className="content lobster-two-bold position-absolute end-0 p-5 w-75 ">
        <h1 >enjoy The Tastic Meals And Drinks at Bloom House</h1>
      </div>
       
   </div>
     
  </>
}
