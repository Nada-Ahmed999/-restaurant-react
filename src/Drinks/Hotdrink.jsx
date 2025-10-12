import React, { useContext, useEffect, useRef, useState } from "react"
import { mycontext } from "../Context/Context.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faMugHot, faSpinner } from "@fortawesome/free-solid-svg-icons"
import UseCountItem from "../custom/UseCountItem.jsx";


 
export default function Hotdrink() {
  
  let {coffee,add,deleteItem}=useContext(mycontext);
  let x=0;

  let local=localStorage.length !== 0 ?Object.keys(localStorage):null;


  
  return<>
<div className="bg-caffe pt-5">

<div className="container bg-container rounded-4 mt-5 pt-3">
     <div className=" d-flex  justify-content-around mx-3 pt-5 px-3 align-items-center bg-offer mt-5 py-4  d-flex justify-content-between rounded-3 shadow">

   <video
        autoPlay
        loop
        muted
        playsInline
        width={400}
        className="rounded-circle"
        
      >
        <source src="../../public/video/hotdrink.mp4" type="video/mp4" className='position-absolute' />
      </video>
 <h1 className="text-orange mb-0 pt-5 w-50 ">Enjoy Your Coffee With Bloom House <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon></h1>
</div>
{/* menu hot drink  */}
<div className="rounded-3 d-flex flex-wrap mt-5 justify-content-center" >
  {coffee? coffee.drinks.map((product,index)=>{    
    product.count=x
    
    return   product.strDrinkThumb?
    <div key={index} className=" bg-light pb-3 mb-5 mx-3 rounded-start-5 text-center">
  <img src={product.strDrinkThumb} alt=""  width={200} height={300} className="rounded-start-5"/>
  <h3 className="text-orange fw-bold">{product.strDrink}</h3>
  <span className="text-orange fw-bold">EGP <span className="text-success fw-bold">{coffee.price}</span></span>
  
  <div>
  <button className={`text-color p-2 rounded-5 fw-bold me-2  btn-hover bg-caffe `}  
  onClick={()=>{product.count=product.count+1;
  add(product,coffee.price);
  console.log(product);
}}
   >Add to cart</button>
  <button className=" bg-container text-orange  fs-5 fw-bold rounded-1 btn-add"  
  onClick={()=>{
    product.count=product.count+1
    add(product,coffee.price);
  }}>+</button>
  <span className="bg-caffe text-orange fw-bold py-1 fs-5 "><UseCountItem countItem={local?local.map((key)=>key == product.strDrink?(localStorage[product.strDrink]):""):""} coffeeTitle={product.strDrink}/></span>
  <button className="bg-container text-orange fs-5 fw-bold rounded-1 px-2 btn-add" 
   onClick={()=>{
 product.count=product.count-1
deleteItem(product,product.strDrink,product.idDrink,coffee.price)
}}>-</button>
  </div>
</div>
:""
  })
: <div style={{height:540}}>
   <FontAwesomeIcon icon={faSpinner} spin spinReverse className='fs-2 d-flex m-auto mt-1 pt-1'></FontAwesomeIcon>
 </div>}
</div>

</div>

</div>

  </>
}
