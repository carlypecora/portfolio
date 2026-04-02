import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Tech />
      <Footer />
    </div>
  )
}

export default App;
