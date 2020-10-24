import React from 'react';
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContainer />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
