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

fetchBreeds()
  .then(breeds => {
    console.log(breeds);
    refs.breedsSelect.classList.remove('is-hidden');
    selectBreeds(breeds, refs.breedsSelect);
    new SlimSelect({
      // з бібліотеки берем стиль селектора
      select: refs.breedsSelect,
      settings: {
        placeholderText: 'Вибери котика)',
      },
    });
  })
  .catch(err => {
    console.log(err);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  })
  .finally(() => {
    refs.loader.classList.add('is-hidden');
  });

function createCatCard(evt) {
  refs.catInfo.classList.add('is-hidden');
  refs.loader.classList.remove('is-hidden');
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      const { breeds, url } = data[0];
      const { name, description, temperament } = breeds[0];
      renderingCatInfo(url, name, description, temperament, refs.catInfo);
    })
    .catch(err => {
      console.log(err);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      refs.catInfo.classList.remove('is-hidden');
      refs.loader.classList.add('is-hidden');
    });
}
