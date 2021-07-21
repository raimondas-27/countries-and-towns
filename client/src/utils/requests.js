import axios from 'axios';

const baseUrl = 'http://localhost:4000';


export const getAllCountriesOrCities = async () => {
   try {
      const res = await axios.get(`${baseUrl}/api/countriesAndCities`);
      return res.data;
   } catch (err) {
      console.log(err);
   }
};

export const postNewCityOrCountry = async (formData, successCallback) => {
   try {
      const res = await axios.post(`${baseUrl}/api/countriesAndCities/new`, formData)
      return successCallback(res.data)
   } catch (err) {
      console.log(err.message)
   }
}

export const deletePlaceOrCountry = async (dataId) => {
   try {
      const res = await axios.delete(`${baseUrl}/api/countriesAndCities/delete/${dataId}`)
      return res.data
   } catch (err) {
      console.log(err.message)
   }
}

