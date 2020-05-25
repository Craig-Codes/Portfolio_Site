// Preloader - add to page then fade out an remove on page load complete
$("body").append(
  '<div style="" id="loadingDiv"><img class="loader" src="/imgs/preloader.gif" alt="Loading..."></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 500);
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    $("#loadingDiv").remove();
  });
}

// Navbar
let clicked = false;
const openNavButton = document.querySelector(".nav-expand-button");
const closeNavButton = document.querySelector(".nav-close-button");
const navIcon = document.querySelector(".nav-icon");

openNavButton.addEventListener("click", navExpand);

const listButtons = document.querySelectorAll(".nav-link");
listButtons.forEach(function (btn) {
  btn.addEventListener("click", closeNav);
});

function navExpand() {
  if (!clicked) {
    document.getElementById("navbar").style.width = "50%";
    navIcon.className = "nav-expand-button nav-icon nav-icon-open";
    clicked = true;
  } else {
    closeNav();
    clicked = false;
  }
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  navIcon.className = "nav-expand-button nav-icon nav-icon-close";
  clicked = false;
}

// Code deals with move down from intro page
const introDown = document.querySelector("#moveDown");
introDown.addEventListener("click", function () {
  location.href = "#about-page";
});

// Code to deal with knowing when a div is in the viewport to trigger a CSS Keyframe animation. Uses the jquery library to help out.
function isOnScreen(element) {
  var curPos = element.offset();
  var curTop = curPos.top;
  var screenHeight = $(window).height();
  return curTop > screenHeight ? false : true;
}

// Functions trigger when certain elements appear in the viewport - Interval so that function is constantly looking
setInterval(animateOnView, 500);

function animateOnView() {
  if (isOnScreen($("#about-underline"))) {
    $("#about-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#project-underline"))) {
    $("#project-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#tech-underline"))) {
    $("#tech-underline").animate(
      {
        width: "100%"
      },
      "slow"
    );
  }
  if (isOnScreen($("#about_image"))) {
    $("#columnTwo img").animate({ width: "100%" }, "slow");
  }
}

// Dealing with theme change between light and dark
const html = document.getElementsByTagName("html")[0];
const typeWriterText = document.querySelector(".typewriter");
const lightModeButton = document.getElementById("light-mode");
const darkModeButton = document.getElementById("dark-mode");

lightModeButton.addEventListener("click", lightMode);
darkModeButton.addEventListener("click", darkMode);

//Working out if Operating System is in light mode or dark mode
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  darkMode();
} else {
  lightMode();
}

function lightMode() {
  html.style.setProperty("--text-color", "black");
  html.style.setProperty("--background-color", "#f1f1f1");
  html.style.setProperty("--white", "white");
  html.style.setProperty("--nav-button", "rgba(0, 0, 0, 0.6)");
  html.style.setProperty("--nav-color", "rgba(255, 255, 255, 0.9)");
  //html.style.setProperty("--font-weight", "bold");
  html.style.setProperty("--background-gradient", "rgba(255, 255, 255, 0.4)");
  html.style.setProperty("--card-background", "#f1f1f1");
  html.style.setProperty("--projects-shadow", "#424242");
  html.style.setProperty("--card-bar-empty", "lightgray");
  html.style.setProperty("--card-bar-full", "grey");
  html.style.setProperty("--card-icons", "lightgrey");
  html.style.setProperty(
    "--background-gradient-contact",
    "rgba(255, 255, 255, 0.2)"
  );
  html.style.setProperty("--footer-border", "black");
  closeNav();
  particlesJS.load("particles-js", "/assets/particles.json", function () {
  });
  document.getElementById("ionic").src = "./imgs/ionic_black.png";
}

function darkMode() {
  html.style.setProperty("--text-color", "#f1f1f1");
  html.style.setProperty("--background-color", "#1b1b1b");
  html.style.setProperty("--white", "black");
  html.style.setProperty("--nav-button", "rgba(255, 255, 255, 0.6)");
  html.style.setProperty("--nav-color", "rgba(0, 0, 0, 0.85)");
  // html.style.setProperty("--font-weight", "normal");
  html.style.setProperty("--background-gradient", "rgba(0, 0, 0, 0.87)");
  html.style.setProperty("--card-background", "#2d2d2e");
  html.style.setProperty("--projects-shadow", "#1a1110");
  html.style.setProperty("--card-bar-empty", "#444");
  html.style.setProperty("--card-bar-full", "grey");
  html.style.setProperty("--card-icons", "#444");
  html.style.setProperty(
    "--background-gradient-contact",
    "rgba(0, 0, 0, 0.65)"
  );
  html.style.setProperty("--footer-border", "white");
  closeNav();
  particlesJS.load("particles-js", "/assets/particles_dark.json", function () {
  });
  document.getElementById("ionic").src = "./imgs/ionic_white.png";
}
