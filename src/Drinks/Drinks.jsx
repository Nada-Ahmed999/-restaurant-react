import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSpinner } from '@fortawesome/free-solid-svg-icons';
import { mycontext } from '../Context/Context.jsx';
import { useNavigate } from 'react-router-dom';

export default function Drinks() {

  let[size,setSize]=useState(window.innerWidth)
  let nav=useNavigate()

  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:500,
    arrows:false
  };

  let {coffee,drink}=useContext(mycontext)





 
 
  return <>

  <div className='bg-caffe pt-5'>
    <div className='container  mt-5 rounded-4 bg-container position-relative' >


{coffee && drink?


   <div className={`d-flex m-auto p-5 ${size < 700?'w-100 flex-column':'w-75'}`}>

 

   {/* card1 */}
  <div className={ `${size < 700?'w-100':'w-50'} col  `}>
  <div className="col me-5 ">
    <div className="card h-100">
      <Slider {...settings}>
        {coffee?coffee.drinks.map((item,index)=>{ 
        return item.strDrinkThumb?
        <div key={index}>
      <img src={item.strDrinkThumb} className="card-img-top rounded-3" alt="..." height={300} />
      </div>:""
    }):""}
    
  
      </Slider>
      <div className="card-body ">
        <button className='bg-caffe text-light fw-bold p-1 rounded-1 btn-add' onClick={()=>nav("/hotdrink")} >Coffee</button>
        <p className="card-text fw-bold  ">
          "Enjoy the most beautiful moments of warmth with our diverse selection of coffees that contribute to the flavors."
          </p>
      </div>
    </div>
  </div>
</div>

{/* card2 */}
  <div className={ `${size < 700?'w-100 pe-5':'w-50'} col `}>
  <div className="col ">
    <div className="card h-100 ">
      <Slider {...settings}>
        {drink?drink.map((item,index)=>{ 
        return <div key={index}>
      <img src={item.strDrinkThumb} className="card-img-top rounded-3" alt="..." height={300} />
      </div>
    }):""}

      </Slider>
      <div className="card-body">
                <button className='bg-caffe text-light fw-bold p-1 rounded-1 btn-add' onClick={()=>nav("/icedrink")}>Ice Drink</button>
        <p className="card-text fw-bold">
"Pamper yourself with our refreshing cold drinks, rich in natural flavors and renewed energy. Every sip will transport you to a refreshing atmosphere."</p>
      </div>
    </div>
  </div>
</div>
 </div>

 :
 <div style={{height:540}}>
   <FontAwesomeIcon icon={faSpinner} spin spinReverse className='fs-2 d-flex m-auto mt-1 pt-1'></FontAwesomeIcon>
 </div>
 
 }
    </div>
  </div>
  </>
}
