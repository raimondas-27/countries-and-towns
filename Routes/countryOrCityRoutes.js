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
      const deletingCountryOrCity = await CountryOrCity.findByIdAndDelete({_id: req.params.id})
      res.json(deletingCountryOrCity);
   } catch (err) {
      res.status(500).json(err);
   }
});

//update single data

router.put('/api/countriesAndCities/edit/:id', async (req, res) => {
  const { name, continent, residentCount, type } = req.body;
  const updatingCountryOrCity = await CountryOrCity.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      continent,
      residentCount,
      type,
    }
  );
  res.send({ success: true, msg: updatingCountryOrCity });
});









module.exports = router;