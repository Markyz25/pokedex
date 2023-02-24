function showMenu() {
  let menuMobile = document.querySelector('.mobile-menu')
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    let imgMenu = document.querySelector('.icon').src = 'assets/menu.svg'
  } else {
    menuMobile.classList.add('open')
    let imgMenu = document.querySelector('.icon').src = 'assets/menuClose.svg'
  }
}

const pokeName = document.querySelector('.pokemon__name')
const pokeNumber = document.querySelector('.pokemon__number')
const pokeImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('#search-pokemon')

const fetchPokemon = async (pokemon) => {

  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await apiResponse.json()
  return data
}

const renderPokemon = async (pokemon) => {
  
  const data = await fetchPokemon(pokemon);
  pokeName.innerHTML = data.name
  pokeNumber.innerHTML = data.id
  pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  renderPokemon(input.value)
})

