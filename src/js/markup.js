function selectBreeds(arr, select) {
  const markup = arr
    .map(
      breed =>
        `<option value="${breed.id}" class="breed">${breed.name}</option>`
    )
    .join('');
  select.innerHTML = markup;
}

function renderingCatInfo(url, name, description, temperament, container) {
  const markupCard = `
    <img src="${url}" class="breed-img" alt="breed" />
    
    <li class="breed-container">
      <h2 class="breed-title">${name}</h2>
      <p class="breed-description">${description}</p>
      <h5 class="breed-temperament">
        <span class="style-temperament">Temperament:</span> ${temperament}
      </h5>
    </li>
    `;
  container.innerHTML = markupCard;
}
export { selectBreeds, renderingCatInfo };

// const renderBreedDesc = breed => {
//   const markupPicture = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}">`;
//   const markupDescript = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
//     <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
//     <p class="cat-info-desc-temp"><b>Temperament:</b> ${breed.breeds[0].temperament}</p>`;
//   divPictEl.insertAdjacentHTML('beforeend', markupPicture);
//   divDescEl.insertAdjacentHTML('beforeend', markupDescript);
// };
