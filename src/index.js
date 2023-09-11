import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectBreeds, renderingCatInfo } from './js/markup';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  breedsSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

fetchBreeds(refs.loader)
  .then(arrCatBreeds => {
    console.log(arrCatBreeds); //масив котиків
    refs.breedsSelect.classList.remove('visually-hidden'); // бачимо селектор
    selectBreeds(arrCatBreeds, refs.breedsSelect); //в парвметри функціі розмітки селектора підставляємо наш масив та селектор
    new SlimSelect({
      // з бібліотеки берем стиль селектора
      select: refs.breedsSelect,
      settings: {
        placeholderText: 'Вибери котика)',
      },
    });
  })
  .catch(error => {
    Notify.failure(error.message, {
      cssAnimationStyle: 'zoom',
      closeButton: true,
      position: 'center-top',
    });
  })
  .finally(() => {
    refs.loader.classList.add('visually-hidden'); //не бачимо завантажувач
  });

refs.breedsSelect.addEventListener('change', createCatCard); // прослуховувач на селектор

function createCatCard(evt) {
  fetchCatByBreed(evt.target.value, refs.loader, refs.catInfo)
    .then(cat => {
      // console.log(cat);

      const { breeds, url } = cat[0];
      const { name, description, temperament } = breeds[0];
      renderingCatInfo(url, name, description, temperament, refs.catInfo); //з масиву котиків вибрали ті властивості які нас цікавлять
      refs.catInfo.classList.remove('visually-hidden'); //бачимо інфу
      refs.loader.classList.add('visually-hidden'); // не бачимо завантажувач
    })
    .catch(error => {
      Notify.failure(error.message, {
        cssAnimationStyle: 'zoom',
        closeButton: true,
        position: 'center-top',
      });
    })
    .finally(() => {
      refs.catInfo.classList.remove('visually-hidden'); ////бачимо інфу
      refs.loader.classList.add('visually-hidden'); // не бачимо завантажувач
    });
}
