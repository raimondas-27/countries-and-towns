import React, { Component } from 'react';
import './App.css';

import CountriesAndCities from "./components/CountriesAndCities";
import FormForCountriesAndCities from "./components/FormForCountriesAndCities";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className={"container"}>
           <FormForCountriesAndCities/>
          <CountriesAndCities/>
        </div>
    );
  }
}

export default App;


