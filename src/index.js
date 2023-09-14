import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectBreeds, renderingCatInfo } from './js/markup';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  breedsSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.error.classList.add('is-hidden');

refs.breedsSelect.addEventListener('change', catCardHaddler);

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
  .catch(fetchErrorHandle);

function catCardHaddler(evt) {
  evt.preventDefault();
  refs.loader.classList.remove('is-hidden');
  refs.breedsSelect.classList.add('is-hidden');
  refs.catInfo.classList.add('is-hidden');

  const form = evt.currentTarget;
  const searchQuiery = form.value;

  fetchCatByBreed(searchQuiery)
    .then(breed => {
      const { breeds, url } = breed[0];
      const { name, description, temperament } = breeds[0];
      renderingCatInfo(url, name, description, temperament, refs.catInfo);
      refs.catInfo.classList.remove('is-hidden');
      refs.catInfo.classList.add('is-hidden');
      refs.loader.classList.add('is-hidden');
    })
    .catch(fetchErrorHandle);
}
function fetchErrorHandle(error) {
  refs.breedsSelect.classList.remove('is-hidden');
  refs.loader.classList.add('is-hidden');

  Notify.failure('Oops! Something went wrong! !', {
    position: 'center-center',
  });
}
