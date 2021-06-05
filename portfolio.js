// Pre-Loader Code
window.addEventListener("load", () => {
  setTimeout(removeLoader, 1000);
});

function removeLoader() {
  const x = document.getElementById("loadingDiv");
  x.style.opacity = "0";
  setTimeout(() => {
    x.remove();
  }, 1000);
}

// Navbar
let navClicked = false;
const openNavButton = document.querySelector(".nav-expand-button");
const closeNavButton = document.querySelector(".nav-close-button");
const navIcon = document.querySelector(".nav-icon");

openNavButton.addEventListener("click", navExpand);

const listButtons = document.querySelectorAll(".nav-link");
listButtons.forEach(function (btn) {
  btn.addEventListener("click", closeNav);
});

function navExpand() {
  if (!navClicked) {
    document.getElementById("navbar").style.width = "50%";
    navIcon.className = "nav-expand-button nav-icon nav-icon-open";
    navClicked = true;
  } else {
    closeNav();
  }
}

function closeNav() {

  document.getElementById("navbar").style.width = "0";
  navIcon.className = "nav-expand-button nav-icon nav-icon-close";
  navClicked = false;
}

// Code to auto close navbar if click occurs outside nav bar
document.addEventListener('click', (e) => {
  let target = e.target.className;
  if(navClicked && target != 'nav-expand-button nav-icon nav-icon-open'){
    if(navClicked && target != 'nav'){
      closeNav();
    }
  }
})


// Code deals with move down from intro page
const introDown = document.querySelector("#moveDown");
introDown.addEventListener("click", function () {
  location.href = "#about-page";
});

// Code deals with automatically updating the date in the footer
document.querySelector("#date").textContent = new Date().getFullYear();

// Code deals with detecting if elements are inside the viewport, adding the .isVisible CSS class when detected to trigger animations

const options = {
  root: null, // use the document's viewport as the container
  rootMargin: "0px", // % or px - offsets added to each side of the intersection
  threshold: 0.01, // percentage of the target element which is visible
};

let callback = (entries) => {
  entries.forEach((entry) => {
    // If entry (element) is visible - according with the params set in `options`
    // then adds `isVisible` class to box
    // otherwise removes `isVisible` class
    if (entry.isIntersecting) {
      entry.target.classList.add("isVisible");
    } else {
      entry.target.classList.remove("isVisible");
    }
  });
};

// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);

// Get all the `.box` from DOM and attach the observer to these
document.querySelectorAll(".observed").forEach((element) => {
  observer.observe(element);
});

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
  stopTransitionAnimations();
  html.style.setProperty("--text-color", "black");
  html.style.setProperty("--background-color", "#f1f1f1");
  html.style.setProperty("--white", "white");
  html.style.setProperty("--nav-button", "rgba(0, 0, 0, 0.6)");
  html.style.setProperty("--nav-color", "rgba(241, 241, 241, 0.95)");
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
  particlesJS.load("particles-js", "/assets/particles.json");
}

function darkMode() {
  stopTransitionAnimations();
  html.style.setProperty("--text-color", "#D3D3D3");
  html.style.setProperty("--background-color", "#121212");
  html.style.setProperty("--white", "black");
  html.style.setProperty("--nav-button", "rgba(255, 255, 255, 0.6)");
  html.style.setProperty("--nav-color", "rgba(18, 18, 18, 0.95)");
  html.style.setProperty("--background-gradient", "rgba(0, 0, 0, 0.87)");
  html.style.setProperty("--card-background", "#121212");
  html.style.setProperty("--projects-shadow", "#D3D3D3");
  html.style.setProperty("--card-bar-empty", "#444");
  html.style.setProperty("--card-bar-full", "grey");
  html.style.setProperty("--card-icons", "#444");
  html.style.setProperty(
    "--background-gradient-contact",
    "rgba(0, 0, 0, 0.65)"
  );
  html.style.setProperty("--footer-border", "white");
  closeNav();
  particlesJS.load("particles-js", "/assets/particles_dark.json");
}

// Stop the transition animations from triggering during a page re-size.
window.addEventListener("resize", stopTransitionAnimations);

// Funtion adds the css .stop-transition class to body elements. This Stops CSS transitions for triggering temporarily
// A timer is then used to remove this class after a small amount of time, so that the effects work again
function stopTransitionAnimations() {
  const classes = document.body.classList;
  classes.add("stop-transition");
  timer = setTimeout(() => {
    classes.remove("stop-transition");
    timer = null;
  }, 100);
}
