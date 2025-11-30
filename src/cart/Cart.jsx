import {  faCartArrowDown, faHandHoldingHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useRef, useState } from 'react'
import UseProductIce from '../custom/UseProductIce.jsx';
import UseProductMeal from '../custom/UseProductMeal.jsx';
import UseProductOffer from '../custom/UseProductOffer.jsx';
import Checkout from '../CheckOut/Checkout.jsx';
import UseProduct from '../custom/UseProduct.jsx';
import { mycontext } from '../Context/Context.jsx';



export default function Cart() { 
  let{coffee}=useContext(mycontext)
  let [test,setTest]=useState(localStorage.ids !== undefined?localStorage.ids:null);
  let [total,setTotal]=useState(localStorage.total !== undefined ?localStorage.total:null)
  let [totalAll,setTotalAll]=useState(0);
  let [open,setOpen]=useState(false)
  let[size,setSize]=useState(window.innerWidth)
  
  setInterval(()=>{
    if(test !== localStorage.ids){
      setTest(localStorage.ids)
    }
    if(total !== localStorage.total){
      setTotal(localStorage.total)
    }
  },0)


  
  
 useEffect(()=>{
  let x;
  if(total){
   x= JSON.parse(total)

   let r= x.reduce((e,c)=>{
     return e + c
   })
   
   setTotalAll(r)
  }else{
    setTotalAll(0)
  }
   
 },[total])
  
   
  return <>
   <div className='bg-caffe  py-5 h-35 overflow-y-scroll'>
     <div className='container bg-container  my-5 rounded-5 pt-4'>
  {/* item */}
  <UseProduct/>
  <UseProductIce/>
  <UseProductMeal/>
  <UseProductOffer/>
  

   {test?"":<div className={`${size < 787?'w-100':'w-60'} bg-caffe  text-orange rounded-2 m-auto p-5 `}> 
   <h1>Come on go choose the best drinks and food
     <span>
       <FontAwesomeIcon icon={faHandHoldingHeart} beatFade></FontAwesomeIcon>
       <FontAwesomeIcon icon={faCartArrowDown} beatFade></FontAwesomeIcon>
     </span></h1>
   </div>}
 
     <div className=' shadow  p-2 w-100 mt-5  m-auto rounded-5 my-2 px-5 d-flex justify-content-between align-items-center '>
      <div className={`${size<727?'w-75 me-2':"w-25"} p-4 rounded-3 px-1 ${totalAll == 0?'hidden-check':""}`} style={{backgroundColor:'#ffffffb5'}}>

     <div className='d-flex justify-content-between shadow p-2 rounded-3 '>
      <h5 className='text-orange fw-bold'>SupTotal:</h5>
      <span className='fw-bold text-success fs-5 '>EGP {totalAll}</span>
     </div>

     <div className='d-flex justify-content-between shadow p-2 rounded-3 '>
      <h5 className='text-orange fw-bold'>Delivery:</h5>
      <span className='fw-bold text-success fs-5'>EGP {50}</span>
     </div>

     <div className='d-flex justify-content-between shadow p-2 rounded-3 '>
      <h5 className='text-orange fw-bold'>Total:</h5>
      <span className='fw-bold text-success fs-5'>EGP {(totalAll)+(50)}</span>
     </div>

        <button className='mt-5 bg-caffe fw-bold p-2 w-100 text-light border-light rounded-3 shadow border-1 btn-add' onClick={()=>setOpen(true)}>CheckOut</button>
     </div>

        <h1 className={`dancing-script-uniquifier text-orange fw-bold ${size<992?'d-flex':''}`}>Bloom House
       {/* <span><img src="../../public/img1.png" alt="" width={70} /></span> */}
        <span><img src="https://img.freepik.com/premium-vector/restaurant-logo-design-vector-illustration-food-symbol-vector_1236506-726.jpg" alt="" width={70} className='rounded-circle'/></span>

       </h1>

     </div>
     <div className={`${open?'':'d-none'}`}>
     <Checkout/>
     </div>
     </div>
   </div>
  </>
}
