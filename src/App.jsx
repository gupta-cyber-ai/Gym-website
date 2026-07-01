import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import { About } from './Component/About/About'
import { Member } from './Component/Member/Member'
import Plans from './Component/Plans/Plans'
import { Testimonials } from './Component/Testimonials/Testimonials'
import { Contact } from './Component/Contact/Contact'
import { Footer } from './Component/Footer/Footer'
import { Progress } from './Component/Progress/Progress'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Payment from './Pages/Payment'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Progress />
      <Member />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
    </Routes>
  )
}

export default App