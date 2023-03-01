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

const fetchPokemon = async (pokemon) => {
  const apiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await apiResponse.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokeName.innerHTML = data.name;
  pokeNumber.innerHTML = data.id;
  pokeImage.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value);
});
