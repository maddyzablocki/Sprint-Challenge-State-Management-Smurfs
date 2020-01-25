import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfVillage';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <Form/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
