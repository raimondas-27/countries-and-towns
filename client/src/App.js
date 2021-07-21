import React, {Component} from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import FormForCountriesAndCities from "./components/FormForCountriesAndCities";
import CountriesAndCities from "./components/CountriesAndCities";
import {getAllCountriesOrCities, deletePlaceOrCountry, postNewCityOrCountry} from "./utils/requests";
import NavBar from "./components/NavBar";
import {toast} from "react-toastify";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         everyCountryOrCity: [],
         formData: {
            name: "",
            continent: "",
            residentCount: 0,
            type: "",
         }
      }
   }

   handleChange = (event) => {
      const formDataCopy = {...this.state.formData};
      formDataCopy[event.target.name] = event.target.value;
      this.setState({formData: formDataCopy});
   }

   handleData = async (event) => {
      event.preventDefault();
      event.target.value = '';
      const postResult = await postNewCityOrCountry(this.state.formData)
      console.log(postResult)
      if (postResult) {
         await this.getAllCitiesAndCountries()
         await toast.success("item added to list :)")
      }
   }

   componentDidMount() {
      this.getAllCitiesAndCountries();
   }

   getAllCitiesAndCountries = async () => {
      const result = await getAllCountriesOrCities();
      this.setState({everyCountryOrCity: result});
   };

   deleteCityOrCountry = async (dataId) => {
      await deletePlaceOrCountry(dataId)
      this.getAllCitiesAndCountries();

   };

   // editCityOrCountry = async ()

   render() {
      return (
          <div className={"container"}>
             <BrowserRouter>
                <NavBar/>
                <Route exact path={"/"}>
                   <CountriesAndCities onDelete={this.deleteCityOrCountry}
                                       everyCountryOrCity={this.state.everyCountryOrCity}
                   />
                </Route>
                <Route path={"/formToCreateCityOrCountry"}>
                   <FormForCountriesAndCities onHandleData={this.handleData}
                                              onHandleChange={this.handleChange}
                                              getAllCitiesAndCountries={this.getAllCitiesAndCountries}
                   />
                </Route>
             </BrowserRouter>
          </div>
      );
   }
}

export default App;


