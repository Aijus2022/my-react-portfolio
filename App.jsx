import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Project from './Project'; // Import the Project component
import Contact from './Contact'; // Import the Contact component

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/header" component={Header} /> 
         <Switch>
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:projectId" component={Project} /> 
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

