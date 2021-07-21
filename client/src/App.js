import React, { Component } from 'react';
import './App.css';

import FormForCountriesAndCities from "./components/FormForCountriesAndCities";
import CountriesAndCities from "./components/CountriesAndCities";

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


