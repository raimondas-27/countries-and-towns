import React, {Component} from 'react';
import "../App.css";

class OneCountryOrCity extends Component {
   constructor(props) {
      super(props);

      this.state = {
         edit: {
            _id: this.props.onePlaceOrCity._id,
            name: this.props.onePlaceOrCity.name,
            continent: this.props.onePlaceOrCity.continent,
            residentCount: this.props.onePlaceOrCity.residentCount,
            type: this.props.onePlaceOrCity.type,
         },
      }
   }

   handleChangeAfterEditing = (event) => {
      const editCopy = {...this.state.edit}
      editCopy[event.target.name] = event.target.value;
      this.setState({edit: editCopy})
   }




   render() {

      const {_id, name, continent, residentCount, type} = this.state.edit;

      return (
          <div className={"container"}>
             {!this.props.onCurrentEditState ? (
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
                       <button onClick={() => this.props.onEditState(_id)}> Edit</button>
                    </div>
                 </div>
             ) : (
                 <div className={"card"}>
                    <div className={"card__name"}>
                       <p>{name}</p>
                       <input type='text'
                              value={name}
                              onChange={this.handleChangeAfterEditing}
                              name='name'/>
                    </div>
                    <div className={"card__continent"}>
                       <p>{continent}</p>
                       <input type='text'
                              value={continent}
                              onChange={this.handleChangeAfterEditing}
                              name='continent'/>
                    </div>
                    <div className={"card__residentCount"}>
                       <p>{residentCount}</p>
                       <input type='number'
                              value={residentCount}
                              onChange={this.handleChangeAfterEditing}
                              name='residentCount'/>
                    </div>
                    <div className={"card__type"}>
                       <p>{type}</p>
                       <input type='text'
                              value={type}
                              onChange={this.handleChangeAfterEditing}
                              name='type'/>
                    </div>
                    <div className={"cart__edit-delete"}>
                       <button onClick={() => this.props.onEdit(_id, this.state.edit)}>
                          Save
                       </button>
                    </div>
                 </div>
             )}
          </div>
      );
   }
}

export default OneCountryOrCity;