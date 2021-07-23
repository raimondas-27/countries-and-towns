import React, {Component} from 'react';

import "../App.css"


class FormForCountriesAndCities extends Component {

   render() {
      return (
          <div>
             <form onSubmit={this.props.onHandleData}
                   onChange={this.props.onHandleChange}
                   className={"form-container"}>
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