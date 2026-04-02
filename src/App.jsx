import React from 'react';
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Tech from './components/Tech.jsx'
import Footer from './components/Footer.jsx'
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
