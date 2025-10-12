import React, { useState } from 'react'

export default function UseCountProduct() {

  let[test,settest]=useState(localStorage.count)
  
  {setInterval(()=>{
    test !== localStorage.count ?settest(localStorage.count):test
   },0)}

  return <>
   <p>{test === undefined?0:test }</p>
  </>
}
