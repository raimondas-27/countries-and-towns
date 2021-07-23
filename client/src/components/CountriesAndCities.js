import React, {Component} from 'react';
import OneCountryOrCity from "./OneCountryOrCity";

class CountriesAndCities extends Component {

   render() {
      return (
          <div className='cont'>
             <button onClick={() => this.props.onFilterByType("city")}> Filter by Cities</button>
             <button onClick={() => this.props.onFilterByType("country")}> Filter by Countries</button>
             <button onClick={() => this.props.getAllCountriesAndCities()}> All cities and countries</button>
             <div className='container'>
                {this.props.everyCountryOrCity.map((onePlaceOrCity) => (
                    <OneCountryOrCity key={onePlaceOrCity._id}
                                      onePlaceOrCity={onePlaceOrCity}
                                      onDelete={this.props.onDelete}
                                      onEdit={this.props.onEdit}
                                      onEditState={this.props.onEditState}
                                      onCurrentEditState={this.props.currentEditState}
                    />
                ))}
             </div>
          </div>

      );
   }
}

export default CountriesAndCities;