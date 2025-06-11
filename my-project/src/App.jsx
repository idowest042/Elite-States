import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from './components/footer'
import AllProperties from './components/AllProperties'
import Product from './components/Product'
import Contact from './components/Contact'
import ServicesPage from './components/Service'
import AboutPage from './components/About'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {
  
  return (
    <div className=''>
      <ToastContainer/>
    <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listing' element={<Product/>}/>
        <Route path='/properties' element={<AllProperties/>}/>
        <Route path='/property/:id' element={<Product/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<h1 className='text-center text-3xl font-bold'>404 Not Found</h1>}/>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App
