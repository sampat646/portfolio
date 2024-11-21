import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './index.css';

const App = () => {
  return (< div className="app-container">
    <Navbar/>
    <Home/>
    <Education/>
    <Skill/>
    <Projects/>
    <Footer/>
    

    </div>
  )
}

export default App  