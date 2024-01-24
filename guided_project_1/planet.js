let nameH1;
let birthYearSpan;
let heightSpan;
let massSpan;
let filmsDiv;
let planetDiv;
const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener("DOMContentLoaded", () => {
  nameH1 = document.querySelector("h1#name");
  birthYearSpan = document.querySelector("span#birth_year");
  massSpan = document.querySelector("span#mass");
  heightSpan = document.querySelector("span#height");
  homeworldSpan = document.querySelector("span#homeworld");
  planetSpan = document.querySelector("span#homeworld");
  filmsUl = document.querySelector("#films>ul");
  const sp = new URLSearchParams(window.location.search);
  const id = sp.get("id");
  getPlanet(id);
});

async function getPlanet(id) {
  let planet;
  try {
    planet = await fetchPlanet(id);
    // planet.character = await fetchCharacter(character);
    // planet.films = await fetchFilms(films);
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

// async function fetchFilms(films) {
//   const url = `${baseUrl}/films/${character?.id}/films`;
//   const films = await fetch(url)
//     .then(res => res.json())
//   return films;
// }

const renderPlanet = (planet) => {
  console.log(planet);
};
