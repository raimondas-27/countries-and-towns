import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {Route, Switch} from 'react-router-dom';
import FormForCountriesAndCities from "./components/FormForCountriesAndCities";
import CountriesAndCities from "./components/CountriesAndCities";
import {
   getAllCountriesOrCities,
   deletePlaceOrCountry,
   postNewCityOrCountry,
   editPlaceOrCountry,
   filterByPlaceOrCountry
} from "./utils/requests";
import NavBar from "./components/NavBar";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         everyCountryOrCity: [],

         editingData: {
            name: "",
            continent: "",
            residentCount: 0,
            type: "",
         },

         isEdit: false,
      }
   }

   handleChangeAfterAdding = (event) => {
      const formDataCopy = {...this.state.editingData};
      formDataCopy[event.target.name] = event.target.value;
      this.setState({editingData: formDataCopy});
   }

   handleData = async (event) => {
      event.preventDefault();
      event.target.value = '';
      const postResult = await postNewCityOrCountry(this.state.editingData)
      console.log(postResult)
      if (postResult) {
         await this.getAllCitiesAndCountries()
         await toast.success("item added to list :)")
      }
   }

   componentDidMount() {
      this.getAllCitiesAndCountries();
   }

   // filterByType = async (type) => {
   //    const allData = await getAllCountriesOrCities();
   //    const filteredData = allData.filter((element) => element.type === type)
   //    this.setState({everyCountryOrCity : filteredData})
   // }

   filterByType = async (type) => {
      const allData = await filterByPlaceOrCountry(type);
      if (allData) {
         await this.getAllCitiesAndCountries();
      }
   }

   getAllCitiesAndCountries = async () => {
      const result = await getAllCountriesOrCities();
      this.setState({everyCountryOrCity: result});
   };

   deleteCityOrCountry = async (dataId) => {
      const deleteResult = await deletePlaceOrCountry(dataId)
      if (deleteResult) {
         await this.getAllCitiesAndCountries();
         await toast.success("item deleted from list")
      }
   };

   handleEditData = async (id, itemBody) => {
      const editResult = await editPlaceOrCountry(id, itemBody)
      if (editResult) {
         await this.setState({isEdit : false})
         await this.getAllCitiesAndCountries();
         toast.success("the list item has been changed")
      }
   }

   toggleEdit = (dataId) => {
      this.setState({isEdit: !this.state.isEdit});
      console.log(dataId)
   }

   render() {
      return (
          <div className={"container"}>
             <ToastContainer/>
             <NavBar/>
             <Switch>
                <Route exact path={"/"} render={(props) => (
                    <CountriesAndCities onDelete={this.deleteCityOrCountry}
                                        everyCountryOrCity={this.state.everyCountryOrCity}
                                        getAllCountriesAndCities={this.getAllCitiesAndCountries}
                                        onFilterByType={this.filterByType}
                                        onEdit={this.handleEditData}
                                        onEditState={this.toggleEdit}
                                        currentEditState={this.state.isEdit}
                                        {...props}
                    />
                )}>
                </Route>
                <Route path={"/formToCreateCityOrCountry"} render={(props) => (
                    <FormForCountriesAndCities onHandleData={this.handleData}
                                               onHandleChange={this.handleChangeAfterAdding}
                                               getAllCitiesAndCountries={this.getAllCitiesAndCountries}
                                               {...props}
                    />
                )}>
                </Route>
             </Switch>
          </div>
      );
   }
}

export default App;


