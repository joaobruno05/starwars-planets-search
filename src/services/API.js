const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export default getPlanets;
