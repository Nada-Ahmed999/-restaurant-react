import React, { useEffect, useState } from 'react'

export default function UseCountItem({countItem,coffeeTitle}) {

  let[countItems,setCountItems]=useState(localStorage[coffeeTitle])  
  
   setInterval(()=>{
    countItems !== localStorage[coffeeTitle]?setCountItems(localStorage[coffeeTitle]):""
  },0)
  
  return <>
  <span className='px-2 fw-bold px-2 fs-4'>{countItems === undefined ?0:countItems}</span>
  </>
  
}
