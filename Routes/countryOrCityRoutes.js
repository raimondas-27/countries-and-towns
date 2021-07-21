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

   const newCountryOrCity = new CountryOrCity({
      name : "Madagaskar",
      continent : "Afrika",
      residentCount : 4546,
      type: "country",
   })

   newCountryOrCity
       .save()
       .then((result) => res.json(result))
       .catch((err) => res.status(400).json({success: false, err}))
});


//delete single data

router.delete('/api/countriesAndCities/:id', async (req, res) => {
   try {
      const deletingCountryOrCity = await CountryOrCity.findByIdAndDelete(req.params.id)
      res.json(deletingCountryOrCity);
   } catch (err) {
      res.status(500).json(err);
   }
});








module.exports = router;