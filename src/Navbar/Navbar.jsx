import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../cart/Cart.jsx'
import { mycontext } from '../Context/Context.jsx'
import UseCountProduct from '../custom/UseCountProduct.jsx'
import { faBraveReverse } from '@fortawesome/free-brands-svg-icons'



export default function Navbar() {

  let [open,setOpen]=useState(false)
  let [test,setTest]=useState(false);
  let[number,setNumber]=useState(false)
  let[size,setSize]=useState(window.innerWidth)
  let [close,setClose]=useState(false)
  

  function handelmenuehot(){
   setTest("hot");
   setOpen(false)
  }

  function handelmenueice(){
   setTest("ice");
   setOpen(false)
  }
  function handelmenuefood(){
   setTest("dinner");
   setOpen(false)
  }

  return <>
<div className='position-absolute d-flex w-100 mb-5 ' style={{zIndex:"100"}} >
 <nav className='  bg-nav w-100 d-flex justify-content-between  '>
  <div className='d-flex px-lg-5'>
    <img src="../../public/img1.png " alt="" width={60} />
    <p className='text-orange pt-3  fw-bold dancing-script-uniquifier fs-4 '>Bloom House</p>
  </div>

   <FontAwesomeIcon icon={faBars} className='text-orange pt-4 fs-2 pe-3 d-lg-none' onClick={()=>close?setClose(false):setClose(true)}></FontAwesomeIcon>
  <div className={`d-lg-flex w-50 justify-content-around pt-2 menu-sm ${close?'':'d-none'} `}>
  <NavLink to='/' className='link btn-hover dancing-script-uniquifier fs-4 px-2'  onClick={()=>setOpen(false)}>HOMe</NavLink>
  <NavLink to='offers'  className='link btn-hover dancing-script-uniquifier fs-4 px-2'  onClick={()=>setOpen(false)}>OFFeRS</NavLink>
  <NavLink to='fastfood' className='link btn-hover dancing-script-uniquifier fs-4 px-2' onClick={()=>setOpen(false)}>FaSt FOOd</NavLink>
  <NavLink to='drinks' className='link btn-hover dancing-script-uniquifier fs-4 px-2'  onClick={()=>setOpen(false)}>DRinkS</NavLink>
  <NavLink to='contact' className='link btn-hover dancing-script-uniquifier fs-4 px-2' onClick={()=>setOpen(false)}>CONtaCt</NavLink>
  <button  to='' className={`btnMenu ${open?`active`:``} btn-hover dancing-script-uniquifier fs-4 px-2`} onClick={()=>open?setOpen(false):setOpen(true)}>Menu</button>
     
     <Link to='cart' className='text-decoration-none'>
     <div className='d-flex'>
    <FontAwesomeIcon icon={faShoppingCart} className="fs-4 d-flex pt-2 text-orange " style={{cursor:"pointer"}} onClick={()=>{
      <Cart/>
      setNumber(true)
    }}>

    </FontAwesomeIcon>
        <span className="text-color fw-bold  fs-6"><UseCountProduct/></span>
     </div>
     </Link>

  </div>
 </nav>
 {/* menu */}
</div>

{open?
 <div className='d-flex justify-content-end '>

<div className={`${size < 992 ?'bottom-50 start-0 py-1  ' :'mb-2 mt-5 top-0  end-0 ' }  position-absolute`}>
    <span className={`${size < 992 ?" px-4  bg-transparent":'px-5 fw-bold  d-inline-block w-100  z-3 '}  mt-3 py-4 position-relative d-flex flex-column bg-menu text-orange rounded-5 `}>
       <NavLink to='hotdrink' className={`${test === "hot"?`text-light `:``} ${size < 992?'bg-caffe mb-2 rounded-circle w-50 p-2 h-50  text-center m-auto':"px-5 fs-5 "}   link border-1 border border-light mb-2 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenuehot()
        setNumber(false)
       }}> Coffee Drinks</NavLink>
       <NavLink to='icedrink' className={`${test === "ice"?`text-light`:``} ${size < 992?'bg-caffe mb-2 rounded-circle w-50 p-2 h-50 text-center m-auto':"px-5 fs-5 "}   link border-1 border border-light mb-2 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenueice()
        setNumber(false)
       }}>Ice Drinks</NavLink>
       <NavLink to='fastfood' className={`${test === "dinner"?`text-light`:``} ${size < 992?'bg-caffe mb-2 rounded-circle w-50 p-2 h-50  text-center m-auto':"fs-5 px-5"}   link border-1 border border-light mb-2 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenuefood()
        setNumber(false)
       }}> Dinner Food</NavLink>
      </span>
    </div>

 </div>
:""}

  </>
}
