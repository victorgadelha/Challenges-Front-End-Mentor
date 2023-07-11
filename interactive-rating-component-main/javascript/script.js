const rate = document.querySelectorAll('.rate')
const button = document.querySelector('#submit-button')
const firstCard = document.querySelector('.rating-container')
const secondCard = document.querySelector('.greetings-container')

button.addEventListener('click', (e) => {
    e.preventDefault()
    firstCard.classList.toggle('disabled')
    secondCard.classList.toggle('disabled')
})


