import React, { useContext } from 'react'
import { mycontext } from '../Context/Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faChampagneGlasses, faSpinner } from '@fortawesome/free-solid-svg-icons';
import UseCountItem from '../custom/UseCountItem.jsx';



export default function Food() {
  let {food,add,deleteItem}=useContext(mycontext);
  let local=localStorage.length !== 0 ?Object.keys(localStorage):null;
  let x=0;



  return <>
  <div className='bg-caffe pt-5 '>
    <div className='container bg-container pt-3 mt-5  rounded-4'>
       
       {/* <div className=" d-flex justify-content-around pt-4 "> */}
       <div className=" d-flex justify-content-around mx-3 pt-4 px-3 align-items-center bg-offer mt-5 py-4  d-flex justify-content-between rounded-3 shadow">
   <video
        autoPlay
        loop
        muted
        playsInline
        width={100}
        height={200}
        className="rounded-start-circle "
        
      >
        <source src="../../public/video/brgr.mp4" type="video/mp4" className='' />
      </video>
 <h1 className="text-orange mb-0 pt-5 w-50 ">Enjoy Your Food With Bloom House <FontAwesomeIcon icon={faBurger}></FontAwesomeIcon></h1>
</div>

{/* menue food */}
<div className='d-flex flex-wrap justify-content-center gap-5 '>
 {food?
 food.map((product,index)=>{
  product.count=x
  return <div className='mt-5 bg-light  text-center pb-4 rounded-5 ' key={index}>
  <img src={product.image} alt="food" width={250} className='rounded-5'/>
<div>
  <div>
   <h4 className='text-orange fw-bold'>{product.title}</h4>
  <span className="text-orange fw-bold">EGP <span className='text-success fw-bold'>{food.price}</span></span>
  </div>
  <div className='mt-2'>
  <button className="bg-caffe text-color p-2 rounded-5 fw-bold me-2 btn-hover"
    onClick={()=>{product.count=product.count+1;
  add(product,food.price)}}
  >Add to cart</button>
  <button className=" bg-container text-orange  fs-5 fw-bold rounded-1 btn-add" 
  onClick={()=>{
    product.count=product.count+1
    add(product,food.price);
  }}
  >+</button>
  <span className="bg-caffe text-orange fw-bold py-1 fs-5 "><UseCountItem countItem={local?local.map((key)=>key == product.title?(localStorage[product.title]):""):""} coffeeTitle={product.title}/></span>
  <button className="bg-container text-orange fs-5 fw-bold rounded-1 px-2 btn-add" 
   onClick={()=>{
 product.count=product.count-1
deleteItem(product,product.title,product.id,food.price)
}}
  >-</button>
  </div>
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
