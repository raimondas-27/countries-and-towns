import React, {Component} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FormForCountriesAndCities from "./components/FormForCountriesAndCities";
import CountriesAndCities from "./components/CountriesAndCities";
import {getAllCountriesOrCities, deletePlaceOrCountry} from "./utils/requests";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         everyCountryOrCity: []
      }
   }

   componentDidMount() {
      this.getAllCitiesAndCountries();
   }

   getAllCitiesAndCountries = async () => {
      const result = await getAllCountriesOrCities();
      this.setState({everyCountryOrCity: result});
   };

   deleteCityOrCountry = async (dataId) => {
      await deletePlaceOrCountry(dataId)
      this.getAllCitiesAndCountries();
   };

   // editCityOrCountry = async ()

   render() {
      return (
          <div className={"container"}>
             <BrowserRouter>
                <Route exact path={"/"}>
                   <CountriesAndCities onDelete={this.deleteCityOrCountry}
                                       everyCountryOrCity={this.state.everyCountryOrCity}
                   />
                </Route>
                <Route path={"/formToCreateCityOrCountry"}>
                   <FormForCountriesAndCities/>
                </Route>
             </BrowserRouter>
          </div>
      );
   }
}

export default App;


