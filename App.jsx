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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> {/* Render Home component for root URL */}
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:projectId" component={Project} /> {/* Add this route for the Project component */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

