import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ArwZ5FQbdEO9JEaPL9lt29Bd5vQ1BQWcfYtXLyZyQUO1zLKhna3wIM9pin9mvn0g';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

//функція повертає проміс із масивом порід
export function fetchBreeds(item_1) {
  item_1.classList.remove('visually-hidden');
  return axios('breeds').then(responce => {
    if (responce.data) {
      return responce.data;
    }
    throw new Error(responce.status);
  });
}

//функція повертає проміс із даними про кота - результатом запиту
export function fetchCatByBreed(breedId, item_1, item_2) {
  item_1.classList.remove('visually-hidden');
  item_2.classList.add('visually-hidden');
  return axios('images/search?breed_ids=' + `${breedId}`).then(responce => {
    if (responce.data) {
      return responce.data;
    }
    throw new Error(responce.status);
  });
}
