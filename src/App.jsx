import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import Service from './components/service-slider/Service'
import Gallery from './components/gallery/Gallery'
import AboutStudio from './components/about-studio/AboutStudio'

function App() {
  return (
    <div className="App">
     <HeroSection/>  
     <Service /> 
     <Gallery />
     <AboutStudio />
    </div>
  )
}

export default App
