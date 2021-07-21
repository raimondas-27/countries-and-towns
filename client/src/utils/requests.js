const baseUrl = 'http://localhost:4000';

export const getAllCountriesOrCities = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/countriesAndCities`);
    const data = await res.json();
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
};