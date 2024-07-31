import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= () =>
  {
    if(mode === "light")
    {
      setMode("dark")
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "#042743";
    }
    else
    {
      setMode("light")
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      <div className="container my=3">
      <Routes>
          <Route path="/about" element={<About mode={mode} showAlert= {showAlert} />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} showAlert= {showAlert} />}>
          </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
