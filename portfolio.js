let clicked = false;

const openNavButton = document.querySelector(".nav-expand-button");
const closeNavButton = document.querySelector(".nav-close-button");

openNavButton.addEventListener("click", navExpand);
closeNavButton.addEventListener("click", closeNav);

const listButtons = document.querySelectorAll(".nav-link");
listButtons.forEach(function(btn) {
  btn.addEventListener("click", closeNav);
});

function navExpand() {
  if (!clicked) {
    console.log("clicked");
    document.getElementById("navbar").style.width = "50%";
    openNavButton.style.display = "none";
    closeNavButton.style.display = "flex";
    clicked = true;
  } else {
    closeNav();
    clicked = false;
  }
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  closeNavButton.style.display = "none";
  openNavButton.style.display = "flex";
  clicked = false;
}
