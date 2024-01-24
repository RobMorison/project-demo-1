let filmNameH1;
let releaseSpan;
let directorSpan;
let episodeSpan;
let characterNameDiv;
let planetDiv;
const baseUrl = `https://swapi2.azurewebsites.net/api`;

addEventListener("DOMContentLoaded", () => {
  filmNameH1 = document.querySelector("h1#name");
  releaseSpan = document.querySelector("span#released_year");
  directorSpan = document.querySelector("span#director");
  episodeSpan = document.querySelector("span#episode");
  charactersUl = document.querySelector("#characters>ul");
  planetsUl = document.querySelector("#planets>ul");
  const sp = new URLSearchParams(window.location.search);
  const id = sp.get("id");
  getFilm(id);
});

// Get Film
async function getFilm(id) {
  let film;
  try {
    film = await fetchFilmName(id);
    film.characters = await fetchCharacters(id);
    film.planets = await fetchPlanets(id);
  } catch (ex) {
    console.error(`Error reading film ${id} data.`, ex.message);
  }
  renderFilm(film);
}

// Fetch film name by id
async function fetchFilmName(id) {
  let filmUrl = `${baseUrl}/films/${id}`;
  //console.log(filmUrl);
  return await fetch(filmUrl).then((res) => res.json());
}

// Fetch character name by id
async function fetchCharacters(id) {
  const url = `${baseUrl}/films/${id}/characters`;
  const characters = await fetch(url).then((res) => res.json());
  return characters;
}

// Fetch planet name by id
async function fetchPlanets(id) {
  const url = `${baseUrl}/films/${id}/planets`;
  const planets = await fetch(url).then((res) => res.json());
  return planets;
}

// Render Films information on page
const renderFilm = (film) => {
  //console.log(film.title);

  document.title = `SWAPI - ${film?.title}`; // Just to make the browser tab says the film name

  filmNameH1.textContent = film?.title;
  releaseSpan.textContent = film?.released_year;
  directorSpan.textContent = film?.director;
  episodeSpan.textContent = film?.episode;

  const charactersLis = film?.characters.map(
    (character) =>
      `<li><a href="/film.html?id=${film.id}">${film.characters}</li>`
  );
  charactersUl.innerHTML = charactersLis.join("");

  const planetsLis = film?.planets?.map(
    (planet) => `<li><a href="/film.html?id=${film.id}">${film.planets}</li>`
  );
  planetsUl.innerHTML = planetsLis.join("");
};
