import React from 'react'
import AdminNavbar from './assets/Navbar'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './assets/Dashboard'
import Login from './assets/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './assets/Signup'
import Homes from './assets/Home'
import Add from './assets/Add'
import ListedHouse from './assets/ListedHouse'
import AdminMessagesDashboard from './assets/Messages'
export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'
const App = () => {
  return (
    
    <div>
      <ToastContainer/>
      <AdminNavbar/>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/' element={<Homes/>}/>
        <Route path='/add' element={<Add/>} />
        <Route path='/list' element={<ListedHouse/>} />
        <Route path='/messages' element={<AdminMessagesDashboard/>} />
      </Routes>
    </div>
  )
}

export default App
