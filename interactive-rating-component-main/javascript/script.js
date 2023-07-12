const rate = document.querySelectorAll('.rate');
const button = document.querySelector('#submit-button');
const firstCard = document.querySelector('.rating-container');
const secondCard = document.querySelector('.greetings-container');

button.addEventListener("click", (e) => {
    e.preventDefault();
    firstCard.classList.toggle('disabled');
    secondCard.classList.toggle('disabled');
})

rate.forEach(rateElement => rateElement.addEventListener("click", toggleColor));

function toggleColor() {
  const clickedElement = this;
  
  rate.forEach(rateElement => {
    if (rateElement === clickedElement) {
      rateElement.style.color = "var(--White)";  
      rateElement.style.backgroundColor = "var(--Light-Grey)";
    } else {
      rateElement.style.backgroundColor = "";
    }
  });
}