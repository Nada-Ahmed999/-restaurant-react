import React, { useState } from 'react'

export default function Contact() {

  let[size,setSize]=useState(window.innerWidth)


  return <>
  <div className='  pt-5 bg-caffe position-relative z-0' >
   <div className='position-absolute bg-dark w-100 h-100 z-1 opacity-50'></div>
    <img src="../../public/conact1.jpg" alt="" className=' position-absolute w-100 h-100 pt-3 '  style={{zIndex:'0'}} />
    <div className='h-35 w-100 position-relative mt-0  z-3 d-flex align-items-center' >

      <div className={`${size < 992 ?'w-100':'w-25'} border border-2 border-light rounded-5 d-flex align-items-center  flex-column  pt-2 m-5`} style={{backgroundColor:'#8f6644'}}>
       <h1 className='text-color fw-bold  head  z-1' >CONTACT US</h1>
         <input type="text" placeholder='phone Number' className=' text-light fw-bold mt-4 w-75  py-3 border-1 border border-white rounded-2 bg-transparent' />
       <input type="text" placeholder='E-Mail' className='text-light mt-4 w-75  py-3 border-1 border border-white rounded-2 bg-transparent'/>
       <input type="text" placeholder='Location'  className='text-light mt-4 w-75  py-3 border-1 border border-white rounded-2 bg-transparent'/>
       <textarea name="" id="" placeholder='Your Massage'  className='text-light mt-4 w-75  py-3 border-1 border border-white rounded-2 bg-transparent'></textarea>
       <input type="submit" value={'Send'} className='btn-hover my-5 w-50  py-2 bg-caffe text-color rounded-2 fw-bold' />
      </div>

  </div>
    </div>
   <div className={`${size < 992?'d-none':''} position-absolute top-50 z-3  d-flex align-items-center`} style={{left:'40%'}}>
    <h1 className='dancing-script-uniquifier fw-bold text-color  me-4  ' style={{fontSize:"82px" }}>Bloom House </h1>
 <span> <img src="../../public/hotmail.png" alt="mail"  width={50}/></span>
 </div>



  </>
}
