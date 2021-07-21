const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// reikia apibrezti kokio tipo duomenys bus saugomi DB

// { title: string, body: string, .. }

const countryOrCitySchema = new Schema(
    {
       name: {
          type: String,
          required: true,
       },
       continent: {
          type: String,
          required: true,
       },
       residentCount: {
          type: Number,
          required: true,
       },
       type: {
          type: String,
          required: true,
       },
    },
    {timestamps: true} /// adds timestamps
);


const CountryOrCity = mongoose.model('countryOrCity', countryOrCitySchema);

module.exports = CountryOrCity;