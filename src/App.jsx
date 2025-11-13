import { useState } from 'react'

import viteLogo from '/vite.svg'
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='bg-gray-900 text-white min-h-screen font-sans'>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>

  )
}
export default App
