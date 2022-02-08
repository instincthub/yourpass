const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");

eventBtn.addEventListener("click", () => {
  overLay.classList.add("showevent");

  closeForm.addEventListener("click", () => {
    overLay.classList.remove("showevent");
  });
});
