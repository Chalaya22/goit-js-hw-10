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

fetchBreeds(refs.loader)
  .then(breeds => {
    console.log(breeds); //масив котиків
    refs.loader.classList.remove('visually-hidden');
    refs.breedsSelect.classList.remove('visually-hidden'); // бачимо селектор
    selectBreeds(breeds, refs.breedsSelect); //в парвметри функціі розмітки селектора підставляємо наш масив та селектор
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
    refs.loader.classList.add('visually-hidden');
  });

function createCatCard(evt) {
  refs.loader.classList.remove('visually-hidden');
  refs.catInfo.classList.add('visually-hidden');
  fetchCatByBreed(evt.target.value)
    .then(breed => {
      const { breeds, url } = breed[0];
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
      refs.catInfo.classList.remove('visually-hidden');
      refs.loader.classList.add('visually-hidden');
    });
}
