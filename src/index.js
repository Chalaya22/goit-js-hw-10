import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { selectBreeds, renderingCatInfo } from './js/markup';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const breedsSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

fetchBreeds(loader)
  .then(arrCatBreeds => {
    console.log(arrCatBreeds); //масив котиків
    breedsSelect.classList.remove('visually-hidden'); // бачимо селектор
    selectBreeds(arrCatBreeds, breedsSelect); //в парвметри функціі розмітки селектора підставляємо наш масив та селектор
    new SlimSelect({
      // з бібліотеки берем стиль селектора
      select: breedsSelect,
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
    loader.classList.add('visually-hidden'); //не бачимо завантажувач
  });

breedsSelect.addEventListener('change', createCatCard); // прослуховувач на селектор

function createCatCard(evt) {
  fetchCatByBreed(evt.target.value, loader, catInfo)
    .then(cat => {
      // console.log(cat);

      const { breeds, url } = cat[0];
      const { name, description, temperament } = breeds[0];
      renderingCatInfo(url, name, description, temperament, catInfo); //з масиву котиків вибрали ті властивості які нас цікавлять
      catInfo.classList.remove('visually-hidden'); //бачимо інфу
      loader.classList.add('visually-hidden'); // не бачимо завантажувач
    })
    .catch(error => {
      Notify.failure(error.message, {
        cssAnimationStyle: 'zoom',
        closeButton: true,
        position: 'center-top',
      });
    })
    .finally(() => {
      catInfo.classList.remove('visually-hidden'); ////бачимо інфу
      loader.classList.add('visually-hidden'); // не бачимо завантажувач
    });
}
