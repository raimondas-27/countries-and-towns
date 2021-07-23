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

export const postNewCityOrCountry = async (formData) => {
   try {
      const res = await axios.post(`${baseUrl}/api/countriesAndCities/new`, formData)
      return res.data
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

export const editPlaceOrCountry = async (id, body) => {
   console.log(body)
   try {
      const res = await axios.put(`${baseUrl}/api/countriesAndCities/edit/${id}`, body)
      console.log(res.data)
      return res.data;
   } catch (err) {
      console.log(err.message)
   }
}

export const filterByPlaceOrCountry = async (type) => {
   const myObj = JSON.parse(type)
   console.log(myObj)
   // try {
   //    const res = await axios.get(`${baseUrl}/api/countriesAndCities/filter` , {type})
   //    return res.data;
   // } catch (err) {
   //    console.log(err.message)
   // }
}

