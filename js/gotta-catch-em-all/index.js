/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {

  pokemonsContainer.innerHTML = '';

  pokemons.forEach(pokemon => {
    const h2 = document.createElement("h2");
    h2.textContent = pokemon.name;

    const img = document.createElement("img");
    img.src = pokemon.image;
    img.alt = pokemon.name;

    const div = document.createElement("div");
    div.classList.value = 'pokemon ' + pokemon.types.join(' ');

    div.appendChild(h2);
    div.appendChild(img);

    pokemonsContainer.appendChild(div);
  });
}

renderPokemons(pokemons);

const search = document.querySelector("#pokemon-name");
const checkboxes = document.querySelectorAll('.types-inputs > label > input[type="checkbox"]:checked');

function filterPokemons(pokemons) {

  const namePart = search.value.toLowerCase();

  typesToDisplay = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) typesToDisplay.push(checkbox.id);
  });
 
  return pokemons.filter(pokemon => (
    pokemon.types.some(type => typesToDisplay.includes(type))
  && 
    pokemon.name.toLowerCase().includes(namePart)
  ));
}


const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
