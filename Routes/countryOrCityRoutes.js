const express = require('express');
const CountryOrCity = require("../Models/countryOrCity")
const router = express.Router();


//get list of countries and cities
router.get('/api/all/countriesAndCities', async (req, res) => {
   try {
      const countriesAndCities = await CountryOrCity.find()
      res.json(countriesAndCities);
   } catch (err) {
      res.status(500).json('internal error');
   }
});


module.exports = router;