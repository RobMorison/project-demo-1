// let planetNameH1;
// let populationSpan;
// let climateSpan;
// let terrainSpan;
// let diameterSpan;
// let gravitySpan;
// let orbitalPeriodSpan;
// let rotationPeriodSpan;
// let filmsUl;
// let charactersUl;
// const baseUrl = `https://swapi2.azurewebsites.net/api`;

// // Runs on page load
// addEventListener("DOMContentLoaded", () => {
//   planetNameH1 = document.querySelector("h1#planetName");
//   populationSpan = document.querySelector("span#population");
//   climateSpan = document.querySelector("span#climate");
//   terrainSpan = document.querySelector("span#terrain");
//   diameterSpan = document.querySelector("span#diameter");
//   gravitySpan = document.querySelector("span#gravity");
//   orbitalPeriodSpan = document.querySelector("span#orbitalPeriod");
//   rotationPeriodSpan = document.querySelector("span#rotationPeriod");
//   filmsUl = document.querySelector("#films>ul");
//   charactersUl = document.querySelector("#characters>ul");
//   const sp = new URLSearchParams(window.location.search);
//   const id = sp.get("id");
//   getPlanet(id);
// });

// async function getPlanet(id) {
//   let planet;
//   try {
//     planet = await fetchPlanet(id);
//     console.log(planet);
//     planet.characters = await fetchCharacters(planet);
//     planet.films = await fetchFilms(planet);
//   } catch (ex) {
//     console.error(`Error reading planet ${id} data.`, ex.message);
//   }
//   renderPlanet(planet);
// }
// async function fetchPlanet(id) {
//   let planetUrl = `${baseUrl}/planets/${id}`;
//   return await fetch(planetUrl).then((res) => res.json());
// }

// async function fetchCharacters(planet) {
//   const url = `${baseUrl}/planets/${planet?.id}/characters`;
//   const characters = await fetch(url).then((res) => res.json());
//   return characters;
// }

// async function fetchFilms(planet) {
//   const url = `${baseUrl}/planets/${planet?.id}/films`;
//   const films = await fetch(url).then((res) => res.json());
//   return films;
// }

// const renderPlanet = (planet) => {
//   document.title = `SWAPI - ${planet?.name}`; // Just to make the browser tab say their name
//   planetNameH1.textContent = planet?.name;
//   populationSpan.textContent = planet?.population;
//   climateSpan.textContent = planet?.climate;
//   terrainSpan.textContent = planet?.terrain;
//   diameterSpan.textContent = planet?.diameter;
//   gravitySpan.textContent = planet?.gravity;
//   orbitalPeriodSpan.textContent = planet?.orbital_period;
//   rotationPeriodSpan.textContent = planet?.rotation_period;
//   const charactersLis = planet?.characters?.map(
//     (character) =>
//       `<li><a href="/character.html?id=${character.id}">${character.name}</li>`
//   );
//   charactersUl.innerHTML = charactersLis.join("");
//   const filmsLis = planet?.films?.map(
//     (film) => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`
//   );
//   filmsUl.innerHTML = filmsLis.join("");
// };

let planetNameH1;
let populationSpan;
let climateSpan;
let terrainSpan;
let diameterSpan;
let gravitySpan;
let orbitalPeriodSpan;
let rotationPeriodSpan;
let filmsUl;
let charactersUl;

const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener("DOMContentLoaded", () => {
  planetNameH1 = document.querySelector("h1#planetName");
  populationSpan = document.querySelector("span#population");
  climateSpan = document.querySelector("span#climate");
  terrainSpan = document.querySelector("span#terrain");
  diameterSpan = document.querySelector("span#diameter");
  gravitySpan = document.querySelector("span#gravity");
  orbitalPeriodSpan = document.querySelector("span#orbitalPeriod");
  rotationPeriodSpan = document.querySelector("span#rotationPeriod");
  filmsUl = document.querySelector("#films>ul");
  charactersUl = document.querySelector("#characters>ul");
  const sp = new URLSearchParams(window.location.search);
  const id = sp.get("id");
  getPlanet(id);
});

async function getPlanet(id) {
  let planet;
  try {
    planet = await fetchPlanet(id);
    console.log(planet);
    console.log(planet.climate);
    planet.character = await fetchCharacter(planet);
    planet.films = await fetchFilms(planet);
  } catch (ex) {
    console.error(`Error reading character ${id} data.`, ex.message);
  }
  renderPlanet(planet);
}

async function fetchPlanet(id) {
  let planetUrl = `${baseUrl}/planets/${id}`;
  return await fetch(planetUrl).then((res) => res.json());
}

async function fetchCharacter(character) {
  let characterURL = `${baseUrl}/films/${character}/characters`;
  return await fetch(characterURL).then((res) => res.json());
}

async function fetchFilms(planet) {
  const url = `${baseUrl}/planets/${planet?.id}/films`;
  const films = await fetch(url).then((res) => res.json());
  return films;
}

const renderPlanet = (planet) => {
  document.title = `SWAPI - ${planet?.name}`;
  planetNameH1.textContent = planet?.name;
  populationSpan.textContent = planet?.population;
  climateSpan.textContent = planet?.climate;
  terrainSpan.textContent = planet?.terrain;
  diameterSpan.textContent = planet?.diameter;
  gravitySpan.textContent = planet?.gravity;
  orbitalPeriodSpan.textContent - planet?.orbital_period;
  rotationPeriodSpan.textContent = planet?.rotation_period;
  const charactersLis = planet?.characters?.map(
    (character) =>
      `<li><a href="/character.html?id=${character.id}">${character.name}</li>`
  );
  charactersUl.innerHTML = charactersLis.join("");
  const filmLis = planet?.films?.map(
    (film) => `<li><a href="/film.html?id=${film.id}">${film.title}</li>`
  );
  filmsUl.innerHTML = filmLis.join("");
};
