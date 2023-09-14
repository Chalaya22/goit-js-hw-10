function selectBreeds(breeds, select) {
  const markup = breeds
    .map(
      breed =>
        `<option value="${breed.id}" class="breed">${breed.name}</option>`
    )
    .join('');
  select.innerHTML = markup;
}

function renderingCatInfo(url, name, description, temperament, container) {
  const markupCard = `
    <img src="${url}" class="breed-img" alt=${name} />

    <ul class="breed-container">
      <h2 class="breed-title">${name}</h2>
      <p class="breed-description">${description}</p>
      <h5 class="breed-temperament">
        <span class="style-temperament">Temperament:</span> ${temperament}
      </h5>
    </ul>
    `;
  container.innerHTML = markupCard;
}
export { selectBreeds, renderingCatInfo };
