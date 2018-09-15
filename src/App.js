import React, { Component } from 'react';
import './App.css';
import Welcome from "./screens/Welcome/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Welcome}/>
        </Switch>
      </div>
    );
  }
}

export default App;
