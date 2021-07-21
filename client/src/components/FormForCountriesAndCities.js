import React, {Component} from 'react';
import {postNewCityOrCountry} from "../utils/requests";
import "../App.css"

class FormForCountriesAndCities extends Component {
   state = {
      formData: {
         name: "",
         continent: "",
         residentCount: 0,
         type: "",
      }

   }

   handleChange = (event) => {
      const formDataCopy = {...this.state.formData};
      formDataCopy[event.target.name] = event.target.value;
      this.setState({formData: formDataCopy});
   }

   handleData = (event) => {
      event.preventDefault();
      event.target.value = '';
      postNewCityOrCountry(this.state.formData, () => {});
   }

   render() {
      return (
          <div>
             <form onSubmit={this.handleData} onChange={this.handleChange} className={"form-container"}>
                <label htmlFor={"name"}> Miestas : </label>
                <input id={"name"}
                       name={"name"}
                       type="text"/>
                <label htmlFor={"continent"}> Zemynas : </label>
                <input id={"continent"}
                       name={"continent"}
                       type="text"/>
                <label htmlFor={"residentCount"}> Gyv. skaicius : </label>
                <input id={"residentCount"}
                       name={"residentCount"}
                       type="text"/>
                <label htmlFor={"type"}> Tipas : </label>
                <input id={"type"}
                       name={"type"}
                       type="text"/>
                <button type={"submit"}
                        className={"form-button"}> Add data
                </button>
             </form>
          </div>
      );
   }
}

export default FormForCountriesAndCities;