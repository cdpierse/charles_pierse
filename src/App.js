import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbo from "./components/Jumbo/Jumbo";
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"

import "./styles.css";
function App() {
  return (
    <div className="App">
      <Jumbo/>
	  <About/>
    <Skills/>
    <Experience/>
    
    </div>
  );
}

export default App;
