let clicked = false;

document.querySelector(".nav-expand").addEventListener("click", navExpand);

function navExpand() {
  if (!clicked) {
    console.log("clicked");
    document.getElementById("navbar").style.width = "80%";
    clicked = true;
  } else {
    closeNav();
    clicked = false;
  }
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}
