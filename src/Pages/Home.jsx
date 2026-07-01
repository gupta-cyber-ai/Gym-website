import React from 'react'
import { Navbar } from '../Component/Navbar/Navbar'
import Hero from '../Component/Hero/Hero'
import { About } from '../Component/About/About'
import { Progress } from '../Component/Progress/Progress'
import { Member } from '../Component/Member/Member'
import Plans from '../Component/Plans/Plans'
import { Testimonials } from '../Component/Testimonials/Testimonials'
import { Contact } from '../Component/Contact/Contact'
import { Footer } from '../Component/Footer/Footer'

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

export default Home