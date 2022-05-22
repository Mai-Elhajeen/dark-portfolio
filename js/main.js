const menuShow = document.querySelector('.menu .icon')
const menuClose = document.querySelector('.navbar .icon')

const navbar = document.querySelector('.navbar')

menuShow.addEventListener('click', e => {
    navbar.classList.add('show-menu')
})
menuClose.addEventListener('click', e => {
    navbar.classList.remove('show-menu')
})