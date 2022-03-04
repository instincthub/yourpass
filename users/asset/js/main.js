const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("activate");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 9 + 0.5
        }s`;
      }
    });

    //bURGER aNIMATION
    burger.classList.toggle("toggle");
  });
};

navSlide();
