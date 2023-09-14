function selectBreeds(breeds, select) {
  const markup = breeds
    .map(
      breed =>
        `<option value="${breed.id}" class="breed">${breed.name}</option>`
    )
    .join('');
  select.innerHTML = markup;
}

function renderingCatInfo(url, container) {
  const markupCard = `
    <img src="${url}" class="breed-img" alt="breed" />

    <li class="breed-container">
      <h2 class="breed-title">${breed[0].name}</h2>
      <p class="breed-description">${breed[0].description}</p>
      <h5 class="breed-temperament">
        <span class="style-temperament">Temperament:</span> ${breed[0].temperament}
      </h5>
    </li>
    `;
  li.innerHTML = markupCard;
}
export { selectBreeds, renderingCatInfo };
