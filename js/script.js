const menuBtn = document.querySelector('.menu-btn');
const menuDesc = document.querySelector('.menu-description')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');

    menuDesc.style.display = 'block'
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuDesc.style.display = 'none'
    menuOpen = false;
  }
});