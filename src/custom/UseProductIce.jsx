import React, { useContext, useState } from 'react'
import { mycontext } from '../Context/Context.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import UseCountItem from './UseCountItem.jsx';


export default function UseProductIce() {

   let{add,delet,deleteItem,drink}=useContext(mycontext);
       let[size,setSize]=useState(window.innerWidth)
   
    
   let items=localStorage.length !== 0?JSON.parse(localStorage.ids):null

   
     items=items?new Set(items):null
     items=items?Array.from(items):null
     let local=localStorage.length !== 0 ?Object.keys(localStorage):null;

   
   
  
  return <>
  
     {items?items.map((id,index)=>{
       return drink?drink.map((drinkItem)=>{
         if(drinkItem.id=== id){            
             return <div className='pt-1' key={index}>
     <div className={`${size < 727 ?'mb-5 w-100':'w-50'} mt-3 shadow border-3 border-warning border  m-auto rounded-5 py-4 position-relative d-flex justify-content-between`} style={{backgroundColor:'#f2eeeac2'}}>
            <div className='border-2 border-warning border-end w-60'>
               <img src={drinkItem.strDrinkThumb} alt="" width={120} height={120} className={` ${size<727?" mt-3 w-25 end-75 top-50":"end-100"} position-absolute top-0 bg-light rounded-circle  me-5 `}  /> 
                 <h2 className='mx-4 text-orange px-5'>{drinkItem.title}</h2>
                 <span className='text-success fw-bold ms-4 fs-5 px-5'>EGP {(drink.price)*(localStorage[drinkItem.title])}</span>
            </div>
  
            <div className='pt-4 border-2 border-end border-warning pe-4'>
              <button className='px-2 fw-bold bg-orange fs-4 text-light rounded-1 btn-hover' onClick={()=>{
                drinkItem.count=drinkItem.count+1
                add(drinkItem.drink.price)
              }}>+</button>
              <UseCountItem countItem={local.map((key)=>key == drinkItem.title?(localStorage[drinkItem.title]):"")} coffeeTitle={drinkItem.title} />
                  <button className='px-2 fw-bold bg-orange fs-4 text-light rounded-1 btn-hover' onClick={()=>{
                     drinkItem.count=drinkItem.count-1
                    deleteItem(drinkItem,drinkItem.title,drinkItem.id,drink.price)
                  }}>-</button>
            </div>
  
                <div className='me-5 mt-4 text-danger'>
                  <button className='border-0 bg-transparent fs-4 text-danger btn-hover' onClick={()=>{
                    delet(drinkItem.title,drinkItem.id,drink.price)
                    
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
