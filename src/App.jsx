import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home/Home.jsx'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Drinks from './Drinks/Drinks.jsx'
import Hotdrink from './Drinks/Hotdrink.jsx'
import Icedrink from './Drinks/Icedrink.jsx'
import Food from './Food/Food.jsx'
import Offers from './offers/Offers.jsx'
import Contact from './contact/Contact.jsx'
import Cart from './cart/Cart.jsx'







export let x =createBrowserRouter([
{path:'/',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:"drinks",element:<Drinks/>},
  {path:"offers",element:<Offers/>},
  {path:"contact",element:<Contact/>},
  {path:"hotdrink",element:<Hotdrink/>},
  {path:"icedrink",element:<Icedrink/>},
  {path:"fastfood",element:<Food/>},
  {path:"cart",element:<Cart/>},
]}
])

function App() {

  return (
    <>
    </>
  )
}

export default App
