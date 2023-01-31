import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import React, { useState } from "react";
import Alert from "./Components/Alert"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  const showAlert = (message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #34383e";
      showAlert(" : Dark mode is Active","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" : Light mode is Active","success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode} link />
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Routes> */}
        {/* <Route path="/about" exact element= {<About />}>
        </Route> */}
        {/* <Route path="/" exact element = {<TextForms showAlert={showAlert} heading="Enter Text area to analyze" mode={mode} />}> */}
        {<TextForms showAlert={showAlert} heading="Enter Text area to analyze" mode={mode} />}
        {/* </Route> */}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
