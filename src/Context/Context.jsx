import axios from 'axios'
import React, { createContext, useEffect, useRef, useState } from 'react'

export let mycontext = createContext(0)



export default function ContextProvider(props) {

   const [coffee, setcoffe] = useState(null)
  const [drink, setdrink] = useState(null)
  const[food,setFood]=useState(null)
  let[data,setData]=useState(null)
  let [count,setcount]=useState(0)
  let id =[];
  let price=[]
 let choesOffer1=food?{title:`${food[2].strCategory}`,price:100,image:food[2].strMealThumb,id:130,count:0}:null
let choesOffer2=food?{title:`${food[18].strCategory}`,price:100,image:food[18].strMealThumb,id:100,count:0}:null
let choesOffer3=food?{title:`${food[15].strCategory}`,price:100,image:food[15].strMealThumb,id:110,count:0}:null



  
  useEffect(()=>{

    // axios.get("https://api.sampleapis.com/coffee/hot")
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee")
    .then((re)=>{
      re.data.price=100
       re.data.drinks.map((drink)=>{
         drink.id=drink.idDrink
         drink.title=drink.strDrink
      })
      
      setcoffe(re.data)      
    })
    .catch((err)=>console.log(err)
    )
  
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((re)=>{
      re.data.drinks.price=80
      re.data.drinks.map((drink)=>{
         drink.id=drink.idDrink
         drink.title=drink.strDrink
      })
      setdrink(re.data.drinks)
    }
  )
    .catch((err)=>console.log(err)
    )

    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((re)=>{
      re.data.meals.price=150
      re.data.meals.map((meal)=>{
         meal.id=meal.idMeal
         meal.title=meal.strCategory
         meal.image=meal.strMealThumb
      })
      
      setFood(re.data.meals)      
    }
  )
  .catch((err)=>console.log(err)
)

},[])




//add
 function add(item,total){ 
      
     id.push(item.id)
     localStorage.total?price=JSON.parse(localStorage.total):price=[];
     price.push(total)
      localStorage.ids=JSON.stringify(id);
      localStorage.total=JSON.stringify(price);
      localStorage.count=(JSON.parse(localStorage.ids)).length
      localStorage[item.title]=item.count
      // localStorage.clear()            
      
    }

    //deleteAll
    function delet(item,itemid,price){
       
      for(let i =0 ; i< localStorage[item] ; i++){
        let total=JSON.parse(localStorage.total)
      
      total = total.filter((item,index)=>{
        return index !== total.indexOf(price)
      })
      
      localStorage.total=JSON.stringify(total)
      }

      id= id.filter((element)=>{
        return element !== id[id.indexOf(itemid)]
      })
      localStorage.removeItem(item)
      localStorage.removeItem(`${item} drink`)
      localStorage.ids=JSON.stringify(id);
      JSON.parse( localStorage.total).length == 0  ? localStorage.removeItem('total'):""
      localStorage.count=(JSON.parse(localStorage.ids)).length
      localStorage.count == 0 ?localStorage.removeItem("ids"):""
      localStorage.count == 0 ?localStorage.removeItem("count"):""
          
    }
  
  
    //delete
    function deleteItem(item,title,itemid,price){
      let total=JSON.parse(localStorage.total)
      
      total = total.filter((item,index)=>{
        return index !== total.indexOf(price)
      })
      
      localStorage.total=JSON.stringify(total)
      
    let itemRemove=id.indexOf(id.find((element)=> element === id[id.indexOf(itemid)]))
       delete id[itemRemove]
       id=id.filter((item)=>{
        return item !== undefined
       })
      
      localStorage.ids=JSON.stringify(id);
      localStorage.count=(JSON.parse(localStorage.ids)).length
      JSON.parse( localStorage.total).length == 0  ? localStorage.removeItem('total'):""

      localStorage[title]=item.count
      localStorage[title] == 0?localStorage.removeItem(title):""
      localStorage.count == 0 ?localStorage.removeItem("ids"):""
      localStorage.count == 0 ?localStorage.removeItem("count"):""
    }

   
  return <>
  <mycontext.Provider  value={{coffee,drink,food,data,setData,id ,count,add,setcount,delet,deleteItem,choesOffer1,choesOffer2,choesOffer3}}>
    {props.children}
  </mycontext.Provider>
  </>
}
