import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ArwZ5FQbdEO9JEaPL9lt29Bd5vQ1BQWcfYtXLyZyQUO1zLKhna3wIM9pin9mvn0g';
const BASE_URL = 'https://api.thecatapi.com/v1/';

//функція повертає проміс із масивом порід
function fetchBreeds() {
  return axios('https://api.thecatapi.com/v1/breeds').then(responce => {
    if (responce.data) {
      return responce.data;
    }
    throw new Error(responce.error);
  });
}

//функція повертає проміс із даними про кота - результатом запиту
function fetchCatByBreed(breedId) {
  return axios(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  ).then(responce => {
    if (responce.data) {
      return responce.data;
    }
    throw new Error(responce.error);
  });
}
export { fetchBreeds, fetchCatByBreed };
