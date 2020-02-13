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

// Code to deal with knowing when a div is in the viewport to trigger a CSS Keyframe animation. Uses the jquery library to help out.

function isOnScreen(element) {
  var curPos = element.offset();
  var curTop = curPos.top;
  var screenHeight = $(window).height();
  return curTop > screenHeight ? false : true;
}

setInterval(animateOnView, 500);

function animateOnView() {
  if (isOnScreen($("#about-underline"))) {
    console.log("on screen");
    $("#about-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#project-underline"))) {
    console.log("on screen");
    $("#project-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#tech-underline"))) {
    console.log("on screen");
    $("#tech-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#columnTwo img"))) {
    console.log("on screen");
    $("#columnTwo img").animate({ width: "100%" }, "slow");
  }
}

// Particle.js landing background

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "/assets/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
