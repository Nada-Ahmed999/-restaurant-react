import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from '../Context/Context.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import UseCountItem from './UseCountItem.jsx';


export default function UseProductOffer() {
  
   let{food,add,delet,deleteItem,orders,choesOffer1,choesOffer2,choesOffer3}=useContext(mycontext);

    let items=localStorage.length !== 0?JSON.parse(localStorage.ids):null
     items=items?new Set(items):null
     items=items?Array.from(items):null
  let local=localStorage.length !== 0 ?Object.keys(localStorage):null;
   let x=1;
   let order=food?[choesOffer1,choesOffer2,choesOffer3]:null

   
  
  return <>
     {items?items.map((id)=>{
       return order?order.map((orderItem,index)=>{
         if(orderItem.id === id){  
             
   return <div className='pt-1' key={index}>
     <div className='mt-3 shadow border-3 border-warning border  w-50 m-auto rounded-5 py-4 position-relative d-flex justify-content-between' style={{backgroundColor:'#f2eeeac2'}}>
            <div className='border-2 border-warning border-end w-60'>
               <img src="../../public/50-2-removebg-preview.png" alt="50offer" width={70} className='position-absolute end-0 bottom-50  mb-4'  />
               <img src={orderItem.image} alt="" width={120} height={120} className='position-absolute top-0 bg-light rounded-circle end-100 me-5 '   /> 
                 <img src={JSON.parse(localStorage[`${orderItem.title} drink`]).strDrinkThumb} alt="drink" width={80} height={80} className='rounded-circle position-absolute end-100 me-3 top-50 border-4 border-light border' />
                 <h3 className='mx-4 text-orange px-5 fw-bold'>{`${orderItem.title} + ${JSON.parse(localStorage[`${orderItem.title} drink`]).strDrink}`}
                  <FontAwesomeIcon icon={faWineGlass} className='text-danger'></FontAwesomeIcon>
                 </h3>
                 <span className='text-success fw-bold ms-4 fs-5 px-5'>EGP{(orderItem.price)}</span>
            </div> 
             <div className='me-5 mt-4 text-danger'>
                  <button className='border-0 bg-transparent fs-4 text-danger btn-hover me-3' onClick={()=>{
                    delet(orderItem.title,orderItem.id,orderItem.price)
                    
                  }}><FontAwesomeIcon icon={faTrash}  ></FontAwesomeIcon></button>
                </div>
   </div>
   </div>
    }
      }):""
     }):""
    }
  
  </>
}
