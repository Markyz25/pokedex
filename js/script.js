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