import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"

// Import your components
import Layout from "./pages/Layout"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
