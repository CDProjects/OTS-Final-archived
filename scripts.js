function toggleMenu() {
  const subMenus = document.querySelector(".sub-menus");
  const hamburgerMenu = document.querySelector(".icon-burger");

  if (subMenus.style.maxHeight === "0px" || subMenus.style.maxHeight === "") {
    // Ease-in effect when opening
    subMenus.style.transition = "max-height 0.5s ease-in"; // 1-second ease-in
    subMenus.style.maxHeight = "100vh";
  } else {
    // Immediate disappearance when closing
    subMenus.style.transition = "none"; // No transition
    subMenus.style.maxHeight = "0px";
  }

  hamburgerMenu.classList.toggle("active");
}
// HOME sub menu scroll to top of page
document.getElementById("home-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
});

// Smooth scrolling for each sub menu
function smoothScrollToSection(linkId, sectionId) {
  document.getElementById(linkId).addEventListener("click", function (e) {
    e.preventDefault();
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
}

// Apply the smooth scrolling to each sub-menu link
smoothScrollToSection("news-link", "news-section");
smoothScrollToSection("team-link", "team-section");
smoothScrollToSection("training-link", "training-section");
smoothScrollToSection("juniors-link", "juniors-section");
smoothScrollToSection("fixtures-link", "fixtures-section");
smoothScrollToSection("media-link", "media-section");
smoothScrollToSection("contact-link", "contact-section");

document.addEventListener("DOMContentLoaded", () => {
  // Preload images
  const images = ["Images/Akseli Peltoniemi.png", "Images/Alejandro Ruiz.png"];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Carousel functionality
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function carouselCycle() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
  }

  // Cycle through images every 3 seconds
  setInterval(carouselCycle, 3000);
});
