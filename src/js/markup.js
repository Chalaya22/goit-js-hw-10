function selectBreeds(arr, select) {
  const markup = arr
    .map(
      breed =>
        `<option value="${breed.id}" class="breed">${breed.name}</option>`
    )
    .join('');
  select.innerHTML = markup;
}

function renderingCatInfo(url, breed, content, temperament, container) {
  const markupCard = `
    <div class="cat-info">
      <img src="${url}" class="breed-img" alt="breed" />
    </div>
    <div class="breed-container">
      <h2 class="breed-title">${breed}</h2>
      <p class="breed-description">${content}</p>
      <h5 class="breed-temperament">
        <span class="style-temperament">Temperament:</span> ${temperament}
      </h5>
    </div>
    `;
  container.innerHTML = markupCard;
}
export { selectBreeds, renderingCatInfo };

// function createMarkap(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { icon, text },
//         },
//       }) => `<li>
//         <img src="${icon}" alt="${text}" />
//         <p>${text}</p>
//         <h2>${date}</h2>
//         <h3>${avgtemp_c}</h3>
//       </li>`
//     )
//     .join("");
// }
