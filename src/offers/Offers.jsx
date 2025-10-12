import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from '../Context/Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts, faFaceSmileWink, faSpinner, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import MenuFree from './MenuFree.jsx'
import UseProductOffer from '../custom/UseProductOffer.jsx'


export default function Offers() {

 const {coffee,food,add}=useContext(mycontext)
 const[open,setOpen]=useState(false);
 let[order,setOrder]=useState(null)
  let[offer1,setOffer1]=useState(false)
  let[offer2,setOffer2]=useState(false)
  let[offer3,setOffer3]=useState(false)
  let[numberof,setNumberof]=useState(null)
  let [list,setList]=useState(null)
  let x=0;
 


  
 
  
  
  return <>
  <img src="../../public/50-removebg-preview.png" alt=""  className='z-2 position-absolute end-0 mt-5  pe-3 me-5 pt-2' width={220} />
  <div className='bg-caffe pt-4 position-relative'>
    <div className='container p-5  '>

      <div className='px-3 align-items-center bg-offer mt-5 py-4  border border-1 border-light d-flex justify-content-between rounded-3 mb-5 '>
       
       <div className='parent d-flex align-items-center'>
<div >
       {food?
        <img src={food[9].strMealThumb} alt="offer" width={250} className='border-img rounded-circle'/> 
        :
        ""
      }
 
       <span className='text-color fw-bold fs-1 px-2'>+</span>

       {coffee?
      <img src={coffee.drinks[6].strDrinkThumb} alt=""  width={250} height={250} className='border-img rounded-circle'/> 
      :""
    }
       <span className='text-color fw-bold fs-1 px-3'>=</span>
       </div>

       <div className=' text pb-3 px-3'>
               <h3 className='text-color fw-bold  text-uppercase fs-2'>enjoy buy <span className='fs-1 text-orange'>2</span> get <span className='fs-1 text-orange'>1</span> free drink 
               <FontAwesomeIcon icon={faFaceSmileWink} className='text-warning px-2'></FontAwesomeIcon>
               </h3>

         </div>
       </div>
       

 <div>
   
 </div>
      </div>

      {/* card-offer */}
      {food?
     
   <div className=' d-flex mt-5 pt-10 '>
    {/* ofer1 */}
    <div className=' w-25 bg-light text-center  my-5  p-5 mx-auto  position-relative d-flex align-items-end rounded-5 h-75'>

 <img src={food[2].strMealThumb} alt="No Offer" width={250} className='border-img rounded-circle position-absolute bottom-50 start-0 ms-4 mb-5' />

      <div className='pt-5 mt-5'>
      <h4 className='pt-5 mt-2' > Offer <span className='text-orange fw-bold fs-2'>1</span></h4>
      <p className='fw-bold'> <span className='text-orange fw-bold fs-2'>2</span> {food[2].strCategory} <span className='text-orange fw-bold fs-2'>+</span> choose free drink</p>
      <p className='text-success fw-bold'><del className='text-danger fw-bold'>EGP150 </del> EGP100</p>
      <button className='bg-orange text-light fw-bold p-2 me-1 rounded-5 btn-hover' onClick={()=>{
        setNumberof('offer1')
        setOpen(true);
        let choesOffer1={title:`${food[2].strCategory}`,price:100,image:food[2].strMealThumb,id:130,count:0}
        order?order.offer1?setOrder({...order,offer1:{...order.offer1,...choesOffer1}}):setOrder({...order,offer1:{...order.offer1,...choesOffer1}}):setOrder({offer1:{...choesOffer1}})
        setOffer1(true)
      }}>Choose <FontAwesomeIcon icon={faWineGlass} className=''></FontAwesomeIcon></button>

      <button className='bg-caffe text-light p-2 rounded-5 fw-bold btn-hover'
      onClick={()=> {
        order?order.offer1?order.offer1.drink?setOffer1(false):setOffer1(true):setOffer1(true):setOffer1(true)
        order.offer1.count=order.offer1.count+1
        setList(Object.keys(order))
        add(order['offer1'],100)
        
        }}

      >Add to Cart</button>
      {offer1?<p className='fs-6 text-danger fw-bold'>please chose your drink</p>:""}
      </div>
    </div>

    {/* offer2 */}
    <div className=' w-25 bg-light text-center  my-5  p-5 mx-auto  position-relative d-flex align-items-end rounded-5 h-75'>
      <div >
      <img src={food[18].strMealThumb} alt="No Offer" width={250} className='border-img rounded-circle position-absolute bottom-50 start-0 ms-4 mb-5' />
      </div>
     
      <div className='pt-5 mt-5'>
      <h4 className='pt-5 mt-2'> Offer <span className='text-orange fw-bold fs-2'>2</span></h4>
      <p className='fw-bold'> <span className='text-orange fw-bold fs-2'>2</span> {food[18].strCategory} <span className='text-orange fw-bold fs-2'>+</span> choose free drink</p>
      <p className='text-success fw-bold'><del className='text-danger fw-bold'>EGP150 </del> EGP100</p>
       <button className='bg-orange text-light fw-bold p-2 me-1 rounded-5 btn-hover ' onClick={()=>{
         setNumberof('offer2')
         setOpen(true);
         let choesOffer2={title:`${food[18].strCategory}`,price:100,image:food[18].strMealThumb,id:100,count:0}
         order?order.offer2?setOrder({...order,offer2:{...order.offer2,...choesOffer2}}):setOrder({...order,offer2:{...order.offer2,...choesOffer2}}):setOrder({offer2:{...choesOffer2}})
         setOffer2(true)
       }}>Choose <FontAwesomeIcon icon={faWineGlass} className=''></FontAwesomeIcon></button>

       <button className='bg-caffe text-light p-2 rounded-5 fw-bold btn-hover' 
      onClick={()=> { 
        order.offer2.count=order.offer2.count+1
        order?order.offer2?order.offer2.drink?setOffer2(false):setOffer2(true):setOffer2(true):setOffer2(true)
        setList(Object.keys(order))
       add(order['offer2'],100)
      }}
      >Add to Cart</button>
        {offer2?<p className='fs-6 text-danger fw-bold'>please chose your drink</p>:""}
      </div>
    </div>

    {/* offer3 */}
    <div className=' w-25 bg-light text-center  my-5  p-5 mx-auto  position-relative d-flex align-items-end rounded-5 h-75'>
      <div>
      <img src={food[15].strMealThumb} alt="No Offer" width={250} className='border-img rounded-circle position-absolute bottom-50 start-0 ms-4 mb-5'/>
      </div>
     
     <div className='pt-5 mt-5'>
      <h4 className='pt-5 mt-2'> Offer <span className='text-orange fw-bold fs-2'>3</span></h4>
      <p className='fw-bold'> <span className='text-orange fw-bold fs-2'>3</span> {food[15].strCategory} <span className='text-orange fw-bold fs-2'>+</span> choose free drink</p>
      <p className='text-success fw-bold'><del className='text-danger fw-bold'>EGP150 </del> EGP100</p>
      <button className='bg-orange text-light fw-bold p-2 me-1 rounded-5 btn-hover' onClick={()=>{
        setNumberof('offer3')
        setOpen(true)
        let choesOffer3={title:`${food[15].strCategory}`,price:100,image:food[15].strMealThumb,id:110,count:0}
        order?order.offer3?setOrder({...order,offer3:{...order.offer3,...choesOffer3}}):setOrder({...order,offer3:{...order.offer3,...choesOffer3}}):setOrder({offer3:{...choesOffer3}})
      }} >Choose <FontAwesomeIcon icon={faWineGlass} className=''></FontAwesomeIcon></button>

      <button className='bg-caffe text-light p-2 rounded-5 fw-bold btn-hover' onClick={()=> {
        order?order.offer3?order.offer3.drink?setOffer3(false):setOffer3(true):setOffer3(true):setOffer3(true)
        order.offer3.count=order.offer3.count+1
        setList(Object.keys(order))
       add(order['offer3'],100)
     
      }}>Add to Cart</button>
      {offer3?<p className='fs-6 text-danger fw-bold'>please chose your drink</p>:""}
     </div>
    </div>
   </div>
 : <div style={{height:540}} className='bg-container'>
   <FontAwesomeIcon icon={faSpinner} spin spinReverse className='fs-2 d-flex m-auto mt-1 pt-1'></FontAwesomeIcon>
 </div>}
    </div>
           {open?<MenuFree close={setOpen}  setOrder={setOrder} order={order} number={numberof} setOffer1={setOffer1} setOffer2={setOffer2} setOffer3={setOffer3} setList={setList}/>:""}
  
  </div>
 

  </>
}
