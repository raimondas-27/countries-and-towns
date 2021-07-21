import React, {Component} from 'react';
import "../App.css";

class OneCountryOrCity extends Component {
   state = {}

   render() {
      return (
          <div className={"card"}>
             <div className={"card__name"}>
                <p> Miesto pavadinimas</p>
                <p>{this.props.onePlaceOrCity.name}</p>
             </div>
             <div className={"card__continent"}>
                <p> Zemyno pavadinimas </p>
                <p>{this.props.onePlaceOrCity.continent}</p>
             </div>
             <div className={"card__residentCount"}>
                <p> Gyventojus skaicius </p>
                <p>{this.props.onePlaceOrCity.residentCount}</p>
             </div>
             <div className={"card__type"}>
                <p> Tipas </p>
                <p>{this.props.onePlaceOrCity.type}</p>
             </div>
          </div>
      );
   }
}

export default OneCountryOrCity;