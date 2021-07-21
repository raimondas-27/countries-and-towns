import React, {Component} from 'react';
import "../App.css"

class FormForCountriesAndCities extends Component {
   state = {
      city: "",
      country: "",
      citizenCount: "",
      type: "",

   }

   handleChange = (event) => {
      this.setState({city: event.target.value});
      this.setState({country: event.target.value});
      this.setState({citizenCount: event.target.value});
      this.setState({type: event.target.value});
   };

   render() {
      return (
          <div>
             <form className={"form-container"}>
                <label htmlFor={"city"}> Miestas : </label>
                <input id={"city"} type="text" onChange={this.handleChange} value={this.state.city}/>
                <label htmlFor={"continent"}> Zemynas </label>
                <input id={"continent"} type="text" onChange={this.handleChange} value={this.state.country}/>
                <label htmlFor={"citizenCount"}> Gyv. skaicius </label>
                <input id={"citizenCount"} type="text" onChange={this.handleChange} value={this.state.citizenCount}/>
                <label htmlFor={"type"}> Tipas </label>
                <input id={"type"} type="text" onChange={this.handleChange} value={this.state.type}/>
                <button class={"form-button"}> Add data</button>
             </form>
          </div>
      );
   }
}

export default FormForCountriesAndCities;