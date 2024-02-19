import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Assuming Header.jsx is exported as default
import Home from './Home'; // Assuming Home.jsx is exported as default
import Projects from './Projects'; // Assuming Projects.jsx is exported as default
import Contact from './Contact'; // Assuming Contact.jsx is exported as default

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

