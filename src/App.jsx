import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header'; // Corrected import paths
import Home from './Home'; // Corrected import paths
import Projects from './Projects'; // Corrected import paths
import Project from './Project'; // Corrected import paths
import Contact from './Contact'; // Corrected import paths

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} /> 
          <Route exact path="/projects" element={<Projects />} /> 
          <Route path="/projects/:projectId" element={<Project />} /> 
          <Route exact path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;



