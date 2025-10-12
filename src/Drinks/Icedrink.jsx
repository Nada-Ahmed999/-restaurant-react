import React, { useContext, useState } from "react"
import { mycontext } from "../Context/Context.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChampagneGlasses,  faSpinner } from "@fortawesome/free-solid-svg-icons"
import UseCountItem from "../custom/UseCountItem.jsx"


 
export default function Hotdrink() {
  
    let {add,deleteItem,drink}=useContext(mycontext);
    let local=localStorage.length !== 0 ?Object.keys(localStorage):null;
    let x=0;

  
  
  
  return<>

<div className="bg-caffe pt-5">

<div className="container bg-container mt-5 rounded-4 pt-3">
       <div className=" d-flex justify-content-around mx-3 pt-4 px-3 align-items-center bg-offer mt-5 py-4  d-flex justify-content-between rounded-3 shadow">

   <video
        autoPlay
        loop
        muted
        playsInline
        width={200}
        height={300}
        className="rounded-top-circle rounded-rounded-rounded-bottom-5"
        
      >
        <source src="../../public/video/drink.mp4" type="video/mp4" className='position-absolute' />
      </video>
 <h1 className="text-orange mb-0 pt-5 w-50 ">Enjoy Your juice With Bloom House <FontAwesomeIcon icon={faChampagneGlasses}></FontAwesomeIcon></h1>
</div>
{/* menu ice drink  */}
<div className="rounded-3 d-flex flex-wrap mt-5 justify-content-center">
  {drink? drink.map((product,index)=>{
    product.count=x
    return <div className=" bg-light pb-3 mb-5 mx-3 rounded-start-5 text-center" key={index}>
  <img src={product.strDrinkThumb} alt=""  width={200} height={300} className="rounded-start-5"/>
  <h6 className="text-orange fw-bold">{product.strDrink}</h6>
  <span className="text-orange fw-bold">EGP <span className="text-success fw-bold">{drink.price}</span></span>

  
  <div>
  <button className="bg-caffe text-color p-2 rounded-5 fw-bold me-2 btn-hover" 
  onClick={()=>{product.count=product.count+1;
  add(product,drink.price);
}}
  >Add to cart</button>
  <button className=" bg-container text-orange  fs-5 fw-bold rounded-1 btn-add" 
  onClick={()=>{
    product.count=product.count+1
    add(product,drink.price);
  }}
  >+</button>
  <span className="bg-caffe text-orange fw-bold py-1 fs-5 "><UseCountItem countItem={local?local.map((key)=>key == product.title?(localStorage[product.title]):""):""} coffeeTitle={product.title}/></span>
  <button className="bg-container text-orange fs-5 fw-bold rounded-1 px-2 btn-add" 
  onClick={()=>{
 product.count=product.count-1
deleteItem(product,product.title,product.id,drink.price)
}}
  >-</button>
  </div>
</div>
  })
: <div style={{height:540}}>
   <FontAwesomeIcon icon={faSpinner} spin spinReverse className='fs-2 d-flex m-auto mt-1 pt-1'></FontAwesomeIcon>
 </div>}
</div>

</div>
</div>

  </>
}
