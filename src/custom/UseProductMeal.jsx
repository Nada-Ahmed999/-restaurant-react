import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from '../Context/Context.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import UseCountItem from './UseCountItem.jsx';


export default function UseProductMeal() {

   let{add,delet,deleteItem,food}=useContext(mycontext);
    
   let items=localStorage.length !== 0?JSON.parse(localStorage.ids):null

   
     items=items?new Set(items):null
     items=items?Array.from(items):null
     let local=localStorage.length !== 0 ?Object.keys(localStorage):null;


   
  
  return <>
  
     {items?items.map((id,index)=>{
       return food?food.map((foodItem)=>{
         if(foodItem.id === id){    
          
             return <div className='pt-1' key={index}>
          <div className='shadow border-2 border-warning border  w-50 m-auto rounded-5 py-4 position-relative d-flex justify-content-between' style={{backgroundColor:'#f2eeeac2'}}>
            <div className='border-2 border-warning border-end w-60'>
               <img src={foodItem.image} alt="" width={120} height={120} className='position-absolute top-0 bg-light rounded-circle end-100 me-5 '   /> 
                 <h2 className='mx-4 text-orange px-5'>{foodItem.title}</h2>
                 <span className='text-success fw-bold ms-4 fs-5 px-5'>EGP {(food.price)*(localStorage[foodItem.title])}</span>
            </div>
  
            <div className='pt-4 border-2 border-end border-warning pe-4'>
              <button className='px-2 fw-bold bg-orange fs-4 text-light rounded-1 btn-hover' onClick={()=>{
                foodItem.count=foodItem.count+1
                add(foodItem,food.price)
              }}>+</button>
              <UseCountItem countItem={local.map((key)=>key == foodItem.title?(localStorage[foodItem.title]):"")} coffeeTitle={foodItem.title} />
                  <button className='px-2 fw-bold bg-orange fs-4 text-light rounded-1 btn-hover' onClick={()=>{
                     foodItem.count=foodItem.count-1
                    deleteItem(foodItem,foodItem.title,foodItem.id,food.price)
                  }}>-</button>
            </div>
  
                <div className='me-5 mt-4 text-danger'>
                  <button className='border-0 bg-transparent fs-4 text-danger btn-hover' onClick={()=>{
                    delet(foodItem.title,foodItem.id,food.price)
                    
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
