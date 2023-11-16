import './App.css';
import Navbar from './components/Navbar';
import ConverterForm from './components/ConverterForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

// Alert Message Function
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type :  type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);  
  }


//Dark Mode - Light Mode Function
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, []);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };


  return (
  <Router>
    <Navbar title="E-Converter"  nav1="Home" nav2="Pricing" nav3="FAQs" nav4="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<ConverterForm title="Booka booka boom boom!!!!" showAlert={showAlert} mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );  
}

export default App;