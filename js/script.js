function showMenu() {
  let nav = document.querySelector(".nav-list");
  let nav_itens = document.querySelectorAll(".nav-itens");
  let mob_menu = document.querySelector(".mobile-menu")
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    mob_menu.classList.remove("open")
    nav_itens.forEach(function (navs) {
      navs.classList.remove("fixed");
    });
  } else {
    nav.classList.add("open");
    mob_menu.classList.add("open")
    nav_itens.forEach(function (navs) {
      navs.classList.add("fixed");
    });
  }
}

const pokeName = document.querySelector(".pokemon__name");
const pokeNumber = document.querySelector(".pokemon__number");
const pokeImage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");
const input = document.querySelector("#search-pokemon");
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
  const apiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (apiResponse.status === 200) {
    const data = await apiResponse.json();
    return data
  }
  ;
};

const renderPokemon = async (pokemon) => {

  pokeName.innerHTML = 'Loading...'
  pokeNumber.innerHTML = ''
  const data = await fetchPokemon(pokemon);
  
  if (data) {
    pokeImage.style.display = 'block'
    pokeName.innerHTML = data.name;
    pokeNumber.innerHTML = data.id;
    pokeImage.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
    input.value = ''
    searchPokemon = data.id
  } else {
    pokeName.innerHTML = 'Not found'
    pokeNumber.innerHTML = ''
    pokeImage.style.display = 'none'
  }
  
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1
    renderPokemon(searchPokemon)
  }
  
})

btnNext.addEventListener("click", () => {
  searchPokemon += 1
  renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)

