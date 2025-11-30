import { faAlarmClock, faMotorcycle, faStopwatch20 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  let nav= useNavigate()

  let[name,setName]=useState(null)
  let [close,setClose]=useState(true)
  let [welcome,setWelcome]=useState(false)
let[size,setSize]=useState(window.innerWidth)

setTimeout(() => {
  if(!close){
   nav('/')
    localStorage.clear()
  }
},5000);

  return <>
  <div>
    {/* background */}
    <div className=' bg-dark position-absolute z-0 w-100 h-100 top-0 start-0 bg-opacity-75' >
      <div className="app z-3 w-100 h-100">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="../../public/video/back.mp4" type="video/mp4" className='position-absolute' />
      </video>
  </div>
    </div>

    {/* regster */}

  <div className='position-absolute bottom-0 w-100 start-0  mb-5 '>
  <div className={`${size<727?'w-100':'w-75'} bg-caffe text-center rounded-5 py-5 position-relative z-1  pe-5 m-auto  ${close?'':'d-none'} `}>
    <img src="../../public/del4.jfif" alt="" className=' rounded-5 z-2 start-0 top-0 w-100 h-100 opacity-50 position-absolute' />
   <form action="" className={`${size<727?'w-75':'w-50'} bg-dark bg-opacity-75 position-relative z-3 d-flex flex-column ms-auto border border-1 border-success py-3 px-2 rounded-5`}>
    <h4 className='fw-bold text-success '> Please register <br></br> your name, address and phone number.</h4>
    <input onChange={(e)=>setName(e.target.value)}  type="text"  placeholder='Your-Name' className='mx-4 text-light fs-5 bg-success bg-opacity-25 p-2 border border-2 border-success my-2 rounded-5'/>
    <input type="text" placeholder='Your-Phone-Number' className='text-light fs-5 mx-4 bg-success bg-opacity-25 p-2 border border-2 border-success rounded-5 my-2'/>
    <input type="text" placeholder='Your Address' className='text-light fs-5 mx-4 bg-success bg-opacity-25 p-2 border border-2 border-success rounded-5 my-2'/>
    <input onClick={(e)=>{
      e.preventDefault()
      setClose(false)
      setWelcome(true)
    }} type="submit"  className=' mx-4 bg-success text-light fw-bold p-2 border border-2 border-success rounded-5 my-3 btn-add' value={'Confirm Order'} />
   </form>
  </div>
  </div>


  
  {/* welcome */}

  <div className= {`p-5  w-100 text-center  rounded-3 position-absolute bottom-50 z-2 start-0 ${welcome?"":'d-none'}`} style={{backgroundColor:'#35220e87'}}>
    <h2 className='fw-bold text-light py-4'>THaNK YoU <span className='text-capitalize fs-1 fw-bold text-success dancing-script-uniquifier'>{name}</span> FoR ChOoSING <span className='fs-1 fw-bold text-success dancing-script-uniquifier'>BLOoM HoUSe</span> ENJoY YoUR OrDER.</h2>
    <h5 className='text-orange fs-3 py-3'>The order will arrive within an hour 
      <FontAwesomeIcon icon={faAlarmClock} shake className='text-success'></FontAwesomeIcon>
      <FontAwesomeIcon icon={faMotorcycle} shake className='text-success'></FontAwesomeIcon>
      </h5>
  </div>

  </div>
  </>
}
