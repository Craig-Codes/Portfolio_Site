// Preloader
$("body").append(
  '<div style="" id="loadingDiv"><img class="loader" src="/imgs/preloader.gif" alt="Loading..."></div>'
);
$(window).on("load", function() {
  setTimeout(removeLoader, 500); //wait for page load PLUS half a second.
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight
  });
}

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
  if (isOnScreen($("#about_image"))) {
    console.log("on screen");
    $("#columnTwo img").animate({ width: "100%" }, "slow");
  }
}

// Particle.js landing background
particlesJS.load("particles-js", "/assets/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// Dealing with theme change between light and dark

const html = document.getElementsByTagName("html")[0];

const lightModeButton = document.getElementById("light-mode");
const darkModeButton = document.getElementById("dark-mode");

lightModeButton.addEventListener("click", lightMode);
darkModeButton.addEventListener("click", darkMode);

//Working out if Operating System is in light mode or dark mode
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("dark mode");
  darkMode();
  particlesJS.load("particles-js", "/assets/particles_dark.json", function() {
    console.log("callback - particles.js config loaded");
  });
} else {
  lightMode();
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("callback - particles.js config loaded");
  });
}

function lightMode() {
  console.log("light mode");
  html.style.setProperty("--text-color", "black");
  html.style.setProperty("--background-color", "#f1f1f1");
  html.style.setProperty("--white", "white");
  html.style.setProperty("--nav-button", "rgba(0, 0, 0, 0.6)");
  html.style.setProperty("--nav-color", "rgba(255, 255, 255, 0.9)");
  html.style.setProperty("--font-weight", "bold");
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
  particlesJS.load("particles-js", "/assets/particles.json", function() {
    console.log("callback - particles.light.js config loaded");
  });
}

function darkMode() {
  console.log("dark mode");
  html.style.setProperty("--text-color", "#f1f1f1");
  html.style.setProperty("--background-color", "#1b1b1b");
  html.style.setProperty("--white", "black");
  html.style.setProperty("--nav-button", "rgba(255, 255, 255, 0.6)");
  html.style.setProperty("--nav-color", "rgba(0, 0, 0, 0.85)");
  html.style.setProperty("--font-weight", "normal");
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
  particlesJS.load("particles-js", "/assets/particles_dark.json", function() {
    console.log("callback - particles.dark.js config loaded");
  });
}
