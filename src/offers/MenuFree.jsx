import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from '../Context/Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'


export default function  MenuFree({close,order,setOrder,number,setOffer1,setOffer2,setOffer3,setList}) {
  let {drink}=useContext(mycontext)
  let [open,setOpen]=useState(false)
  

  let free=[];

   for(let i =40 ; i<50; i++){
    drink?free.push(drink[i]):"";
   }
   

  return<>
  <div className='w-100 h-100 bg-dark position-absolute opacity-75 z-0 top-0'></div>
   <div  className='d-flex justify-content-center'>
    <div className='  overflow-scroll  bg-caffe  h-50 border border-2 border-light rounded-5   position-absolute top-50 ' style={{scrollbarWidth:"none"}}>
        <h4 className=' text-color p-3 text-center border-bottom border-0 border-light bg-gradient  ' >Choose your drink for free  <FontAwesomeIcon icon={faWineGlass} className='text-orange'></FontAwesomeIcon></h4>
      {free? free.map((offer,index)=>{
          return<div key={index} className=' d-flex justify-content-between p-3 shadow border-bottom border-0 border-light border-opacity-75 '>
        <img src={offer.strDrinkThumb} alt="offer"  width={100} className='rounded-circle'/>
          {/* select */}
          <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <h6 className='text-color text-center'>{offer.strDrink}</h6>
          <Form.Check
          disabled={open}
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            className=' text-light pt-3'
            value='1'
            onClick={(e)=>{    
              let drink={drink:offer.strDrink};
              setOrder({...order,[number]:{...order[number],...drink}})
              setOpen(true)
              localStorage[`${order[number].title} drink`]=JSON.stringify(offer)

            }}
            />
          <Form.Check
            disabled
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            className='text-light'
            onClick={(e)=>console.log(e.target.value) }
            value='2'


          />
          <Form.Check
            inline
            disabled
            label="3"
            type={type}
            id={`inline-${type}-3`}
            value='3'
            className='text-light ' 
          />
        </div>
      ))}
    </Form>
      </div> 
      })
      
      :""}
      {/* footer */}
      <div className='text-center m-4'>
        <button className='bg-container fw-bold p-2 rounded-3 me-2 btn-add' onClick={()=>{
          setList(Object.keys(order))
          close(false)
          
       number == 'offer1'?setOffer1(false):number =='offer2'?setOffer2(false):number == 'offer3'?setOffer3(false):""
        }}> Add</button>
        <button className='bg-orange fw-bold p-2 rounded-3 btn-hover' onClick={()=>close(false)}> Close</button>
      </div>
      </div>
    </div>
  </>
}
