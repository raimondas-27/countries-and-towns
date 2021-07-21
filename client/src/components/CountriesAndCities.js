import React, {Component} from 'react';
import OneCountryOrCity from "./OneCountryOrCity";
import {getAllCountriesOrCities} from "../utils/requests"


class CountriesAndCities extends Component {
   constructor(props) {
      super(props);

      this.state = {
         everyCountryOrCity : []
      }
   }

   componentDidMount() {
    this.getAllCountriesAndCountries();
  }

  getAllCountriesAndCountries = async () => {
    const result = await getAllCountriesOrCities();
    this.setState({ everyCountryOrCity: result });
  };


   render() {
      return (
      <div className='container'>
        {this.state.everyCountryOrCity.map((onePlaceOrCity) => (
          <OneCountryOrCity key={onePlaceOrCity._id} onePlaceOrCity={onePlaceOrCity} />
        ))}
      </div>
      );
   }
}

export default CountriesAndCities;