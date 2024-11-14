const navMenuToggler = document.querySelector(".navmenu-toggler");
const collapsableNav = document.querySelector(".collapsable-nav");

navMenuToggler.addEventListener("click", () => {
  collapsableNav.classList.toggle("nav-show");
});

// let vh = Math.max(
//   document.documentElement.clientHeight || 0,
//   window.innerHeight || 0
// );
// console.log(vh);

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
