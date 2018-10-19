import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Espn from './pages/Espn';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/espn" component={Espn} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
