import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectBreeds, renderingCatInfo } from './js/markup';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  breedsSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

refs.breedsSelect.addEventListener('change', createCatCard);
refs.loader.classList.remove('is-hidden');

fetchBreeds()
  .then(breeds => {
    console.dir(breeds);
    refs.breedsSelect.classList.remove('is-hidden');

    selectBreeds(breeds, refs.breedsSelect);
    new SlimSelect({
      select: refs.breedsSelect,
      settings: {
        placeholderText: 'Вибери котика)',
      },
    });
  })
  .catch(err => {
    console.log(err);
    // Notiflix.Notify.failure(
    //   'Oops! Something went wrong! Try reloading the page!'
    // );
  })
  .finally(() => {
    refs.loader.classList.add('is-hidden');
  });

refs.breedsSelect.addEventListener('change', createCatCard);
function createCatCard(evt) {
  fetchCatByBreed(evt.currentTarget.value)
    .then(breed => console.log(breed))

    .catch(err => {
      console.log(err);
      // Notiflix.Notify.failure(
      //   'Oops! Something went wrong! Try reloading the page!'
      // );
    })
    .finally(() => {});
}
