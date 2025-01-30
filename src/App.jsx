import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Info />
      <Footer />
     
          
    </div>
   
  )
}

export default App