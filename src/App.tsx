import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Connect } from 'vite'

import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
      
    </>
  )
}

export default App
