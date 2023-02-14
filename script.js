const ratingEls = document.querySelectorAll(".rating");
let selectedRating = "";
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.parentNode.innerText;
    console.log(selectedRating);
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <hr>
    <br>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <br>
    <br>
    <p>we'll use your feedback to improve our customer support</p>

    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
