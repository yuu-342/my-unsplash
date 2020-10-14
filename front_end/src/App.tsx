import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Top from './containers/pages/Top';
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route exact path='/'component={Top}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
