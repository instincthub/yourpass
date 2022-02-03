const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");

eventBtn.addEventListener("click", () => {
  overLay.classList.toggle("showevent");
});
