import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { x } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Context/Context.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ContextProvider>
    <RouterProvider router={x}>
    <App />
    </RouterProvider>
    </ContextProvider>
  // </StrictMode>,
)


