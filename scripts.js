function toggleMenu() {
  const subMenus = document.querySelector(".sub-menus");
  const hamburgerMenu = document.querySelector(".icon-burger");

  try {
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
  } catch (error) {
    console.log(error);
  }
}

// HOME sub menu scroll to top of page
document.getElementById("home-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default behavior
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
});

// Smooth scrolling for each sub menu
function smoothScrollToSection(linkId, sectionId) {
  try {
      document.getElementById(linkId).addEventListener("click", function (e) {
          e.preventDefault();
          
          var section = document.getElementById(sectionId);
          
          // Dynamically calculate the navbar height and section margin-top at the moment of click
          var navbarHeight = document.querySelector(".nav-bar-medium").offsetHeight;
          var sectionMarginTop = parseInt(window.getComputedStyle(section).marginTop, 10);  // Gets the margin-top value as an integer
          var positionToScrollTo = section.offsetTop - navbarHeight - sectionMarginTop;

          window.scrollTo({
              top: positionToScrollTo,
              behavior: "smooth"
          });
      });
  } catch (error) {
      console.log(error);
  }
}

// Apply the smooth scrolling to each sub-menu link
smoothScrollToSection("news-link", "news-section");
smoothScrollToSection("team-link", "team-section");
smoothScrollToSection("training-link", "training-section");
smoothScrollToSection("juniors-link", "juniors-section");
smoothScrollToSection("fixtures-link", "fixtures-section");
smoothScrollToSection("media-link", "media-section");
smoothScrollToSection("recruiting-link", "recruiting-section");
smoothScrollToSection("contact-link", "contact-section");

// Smooth scrolling for the about-us-btn
document.querySelector(".about-us-btn").addEventListener("click", function (e) {
  e.preventDefault();
  var section = document.getElementById("recruiting-section");
  section.scrollIntoView({ behavior: "smooth" });
});

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

// Select all navbar links
const navLinks = document.querySelectorAll(".nav-bar-medium a");

navLinks.forEach((link) => {
  try {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent the default jump-to-anchor behavior

      const targetId = this.getAttribute("href"); // get the target id (e.g., "#home")
      const targetElement = document.querySelector(targetId); // select the target element

      const navbarHeight =
        document.querySelector(".nav-bar-medium").offsetHeight;
      let positionToScrollTo = targetElement.offsetTop - navbarHeight;

      // If it's not the home link, adjust the position to scroll to
      if (targetId !== "#home") {
        positionToScrollTo += 50; // This is an arbitrary value; adjust as needed
      }

      window.scrollTo({
        top: positionToScrollTo,
        behavior: "smooth",
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const elemHalfHeight = element.offsetHeight / 2;
  
  return (
      rect.top + elemHalfHeight >= 0 &&
      rect.top + elemHalfHeight <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to set the document title based on the section in viewport
function setDocumentTitle() {
  const sections = [
      {id: "home", title: "HOME"},
      {id: "news-section", title: "NEWS"},
      {id: "team-section", title: "TEAM"},
      {id: "training-section", title: "TRAINING"},
      {id: "juniors-section", title: "JUNIORS"},
      {id: "fixtures-section", title: "FIXTURES"},
      {id: "media-section", title: "MEDIA"},
      {id: "contact-section", title: "CONTACT"}
  ];
  
  for (const section of sections) {
      const elem = document.getElementById(section.id);
      if (isInViewport(elem)) {
          document.title = `${section.title} | oldtownshamrocks`;
          break;
      }
  }
}

// Add a scroll event listener to update the title
window.addEventListener('scroll', setDocumentTitle);

