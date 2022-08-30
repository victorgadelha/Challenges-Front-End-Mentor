hamburguerMenu = document.querySelector('.hamburguer-menu')
headerList = document.querySelector('.header-list')

hamburguerMenu.addEventListener('click', () => {
    hamburguerMenu.classList.toggle('active')
    headerList.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(navLink => navLink.addEventListener('click', () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active')
}))