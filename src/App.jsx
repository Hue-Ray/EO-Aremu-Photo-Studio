import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import Service from './components/service-slider/Service'

function App() {
  return (
    <div className="App">
     <HeroSection/>  
     <Service /> 
    </div>
  )
}

export default App
