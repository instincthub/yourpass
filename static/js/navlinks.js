const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".form li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 9 + 0.5
        }s`;
      }
    });

    //bURGER aNIMATION
    burger.classList.toggle("toggle");
  });
};

navSlide();
