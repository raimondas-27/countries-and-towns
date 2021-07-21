import React, {Component} from 'react';
import OneCountryOrCity from "./OneCountryOrCity";

class CountriesAndCities extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
      <div className='container'>
        {this.props.everyCountryOrCity.map((onePlaceOrCity) => (
          <OneCountryOrCity  key={onePlaceOrCity._id}
                             onePlaceOrCity={onePlaceOrCity}
                             onDelete={this.props.onDelete}
          />
        ))}
      </div>
      );
   }
}

export default CountriesAndCities;