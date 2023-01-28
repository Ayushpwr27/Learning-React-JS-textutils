import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextForms from './Components/TextForms';
function App() {
  return (
    <div className="App">
      <Navbar title="textutils" aboutText="About text utils" />
      <div className="container">
        {/* <TextForms heading="Enter Text area to analyze"/>  */}
        <About />
      </div>
    </div>
  );
}

export default App;
