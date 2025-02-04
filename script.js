// Navbar Menu Toggler
const navMenuToggler = document.querySelector(".navmenu-toggler");
const collapsableNav = document.querySelector(".collapsable-nav");

navMenuToggler.addEventListener("click", () => {
  collapsableNav.classList.toggle("nav-show");
});

// Light Box
const lightbox = document.getElementById("lightbox");
const imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", (e) => {
  const image = e.target.closest("img");
  if (image) {
    lightbox.innerHTML =
      '<div class="close-lightbox"><i class="fa-solid fa-xmark fa-2xl"></i></div>' +
      image.outerHTML;
    lightbox.classList.toggle("show");
  }
});

lightbox.addEventListener("click", (e) => {
  if (!e.target.hasAttribute("src")) {
    lightbox.classList.remove("show");
  }
});

// Skeleton Loading
const imgSkeleton = document.querySelectorAll(".img-skeleton");
imgSkeleton.forEach((skeleton) => {
  const img = skeleton.querySelector("img");

  function loaded() {
    skeleton.classList.add("loaded");
    setTimeout(() => {
      skeleton.classList.remove("img-skeleton");
    }, 1000);
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
