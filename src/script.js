const loginButton = document.getElementById('loginButton');
const modal = document.getElementById('loginModal');
const closeButton = document.getElementsByClassName("close")[0];

loginButton.addEventListener('click', () => {
  modal.style.display = "block";
});

closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};