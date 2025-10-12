import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../cart/Cart.jsx'
import { mycontext } from '../Context/Context.jsx'
import UseCountProduct from '../custom/UseCountproduct.jsx'




export default function Navbar() {

  let [open,setOpen]=useState(false)
  let [test,setTest]=useState(false);
  let[number,setNumber]=useState(false)
   
  

   
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
<div className='position-absolute d-flex w-100 mb-5  ' style={{zIndex:"100"}} >
 <nav className='  bg-nav w-100 d-flex justify-content-between  '>
  <div className='d-flex px-5'>
    <img src="../../public/img1.png " alt="" width={60} />
    <p className='text-orange pt-3  fw-bold dancing-script-uniquifier fs-4 '>Bloom House</p>
  </div>

  <div className='d-flex w-50 justify-content-around pt-2'>
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

<div className=' mb-2 position-absolute top-0 mt-5  end-0 '>
    <span className='d-flex flex-column bg-menu py-4 px-5 text-orange fw-bold rounded-5 d-inline-block w-100 mt-3 position-relative z-3 '>
       <NavLink to='hotdrink' className={`${test === "hot"?`text-light `:``} fs-5 link border-1 border border-light mb-2 px-5 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenuehot()
        setNumber(false)
       }}> Coffee Drinks</NavLink>
       <NavLink to='icedrink' className={`${test === "ice"?`text-light`:``} fs-5 link border-1 border border-light mb-2 px-5 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenueice()
        setNumber(false)
       }}>Ice Drinks</NavLink>
       <NavLink to='fastfood' className={`${test === "dinner"?`text-light`:``} fs-5 link border-1 border border-light mb-2 px-5 btn-hover`} onClick={()=>{
        test?setTest(false):handelmenuefood()
        setNumber(false)
       }}> Dinner Food</NavLink>
      </span>
    </div>

 </div>
:""}

  </>
}
