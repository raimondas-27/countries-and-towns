import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import CountriesAndCities from "./components/CountriesAndCities";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className={"container"}>
          <CountriesAndCities/>
        </div>
    );
  }
}

export default App;


