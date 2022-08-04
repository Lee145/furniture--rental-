const navToggler = document.querySelector('.nav-hamburger')
const menu = document.querySelector('nav')

navToggler.addEventListener('click', () => {
  changeToggler()
  menu.classList.toggle('show')
})

function changeToggler() {
  if (menu.classList.contains('show')) {
    navToggler.innerHTML = ' <i class="fa-solid fa-bars"></i>'
  } else {
    navToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
}
