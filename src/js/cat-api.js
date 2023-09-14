import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ArwZ5FQbdEO9JEaPL9lt29Bd5vQ1BQWcfYtXLyZyQUO1zLKhna3wIM9pin9mvn0g';
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEI =
  'live_ArwZ5FQbdEO9JEaPL9lt29Bd5vQ1BQWcfYtXLyZyQUO1zLKhna3wIM9pin9mvn0g';

// function fetchBreeds() {
//   return fetch(`${BASE_URL}/breeds?x-api-key=${API_KEI}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   });
// }

// function fetchCatByBreed(breedId) {
//   return fetch(
//     `${BASE_URL}/images/search?x-api-key=${API_KEI}&breed_ids=${breedId}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   });
// }

//функція повертає проміс із масивом порід
function fetchBreeds() {
  return axios('https://api.thecatapi.com/v1/breeds').then(responce => {
    if (responce) {
      return responce.data;
    }
    throw new Error(responce.status);
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
    throw new Error(responce.status);
  });
}
export { fetchBreeds, fetchCatByBreed };
