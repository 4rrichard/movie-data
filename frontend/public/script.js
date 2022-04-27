const movieCardComponent = function (title, year, text) {
  return `
  <div class="card">
  <div class="movie-title">${title}</div>
  <div class="movie-year">${year}</div>
  <div class="movie-text">${text}</div>
  <br>
</div>
    `;
};

const loadEvent = function () {
  const rootElement = document.getElementById("root");

  for (const movie of movies.cards) {
    rootElement.insertAdjacentHTML(
      "beforeend",
      movieCardComponent(movie.title, movie.sub, movie.text)
    );
  }
};

window.addEventListener("load", loadEvent);
