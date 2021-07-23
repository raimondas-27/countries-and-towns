const express = require('express');
const CountryOrCity = require("../Models/countryOrCity")
const router = express.Router();


//get list of countries and cities
router.get('/api/countriesAndCities', async (req, res) => {
   try {
      const countriesAndCities = await CountryOrCity.find()
      res.json(countriesAndCities);
   } catch (err) {
      res.status(500).json('internal error');
   }
});

//post new data
router.post('/api/countriesAndCities/new', (req, res) => {
   console.log(req.body);

   const newCountryOrCity = new CountryOrCity(req.body)

   newCountryOrCity
       .save()
       .then((result) => res.json(result))
       .catch((err) => res.status(400).json({success: false, err}))
});


//delete single data

router.delete('/api/countriesAndCities/delete/:dataId', async (req, res) => {
   try {
      const deletingCountryOrCity = await CountryOrCity.findByIdAndDelete({_id: req.params.dataId})
      res.json(deletingCountryOrCity);
   } catch (err) {
      res.status(500).json(err);
   }
});

//update single data
//TODO va cia tai idomiai
router.put('/api/countriesAndCities/edit/:id', async (req, res) => {
   console.log("req body",req.body)
   try {
      // const {name, continent, residentCount, type} = req.body;
      // const updatingCountryOrCity = await CountryOrCity.findByIdAndUpdate({_id: req.params.id}, req.body)
      const updatingCountryOrCity = await CountryOrCity.findByIdAndUpdate({_id: req.params.id},
          req.body)
      console.log(updatingCountryOrCity)
      res.json({success: true, msg: updatingCountryOrCity});
   } catch (err) {
      res.json(err);
   }

});

router.get('/api/countriesAndCities/filter', async (req, res) => {
   console.log("pasileidau")
   try {
      const allCountriesAndCities = await CountryOrCity.find()
      const filteredCountriesOrCities = allCountriesAndCities.filter((element) => element.type === req.body)
      res.json({success : true, filteredCountriesOrCities});
   } catch (err) {
      res.status(500).json('internal error');
   }
});


module.exports = router;