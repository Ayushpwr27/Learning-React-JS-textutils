import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from './Components/TextForms';
import React, { useState } from 'react';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }

  return (
    <div className="App">
      <Navbar title="textutils" mode = {mode} aboutText="About text utils" toggleMode={toggleMode} />
      <div className="container">
        <TextForms heading="Enter Text area to analyze"/> 
        <About />
      </div>
    </div>
  );
}

export default App;