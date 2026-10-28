import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Men from './Pages/Men'
import Women from './Pages/Women'
import NotFound from './Pages/NotFound'
import CourseDetails from './Pages/CourseDetails'
import Customer from './Pages/Customer'
import CustomerCare from './Pages/CustomerCare'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <div>
        <Navbar />
      </div>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/product' element={<Product />}>
        <Route path='men' element={<Men />}></Route>
        <Route path='women' element={<Women />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/customer' element={<Customer />}>
        <Route path='customercare' element={<CustomerCare />}></Route>
        </Route>
        <Route path='/course/:courseId' element={<CourseDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
