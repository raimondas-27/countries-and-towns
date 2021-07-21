import React, {Component} from 'react';
import "../App.css";

class OneCountryOrCity extends Component {
   state = {}

   render() {

      const {_id, name, continent, residentCount, type} = this.props.onePlaceOrCity

      return (
          <div className={"card"}>
             <div className={"card__name"}>
                <p> Miesto pavadinimas</p>
                <p>{name}</p>
             </div>
             <div className={"card__continent"}>
                <p> Zemyno pavadinimas </p>
                <p>{continent}</p>
             </div>
             <div className={"card__residentCount"}>
                <p> Gyventojus skaicius </p>
                <p>{residentCount}</p>
             </div>
             <div className={"card__type"}>
                <p> Tipas </p>
                <p>{type}</p>
             </div>
             <div className={"cart__edit-delete"}>
                <button onClick={() => this.props.onDelete(_id)}> Delete</button>
                <button> Edit </button>
             </div>
          </div>
      );
   }
}

export default OneCountryOrCity;