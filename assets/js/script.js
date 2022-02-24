const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");
const rotate = document.querySelector(".resend");
const arrow = document.querySelector("#imgg");

rotate.addEventListener("click", () => {
  arrow.classList.toggle("trans");
});

eventBtn.addEventListener("click", () => {
  overLay.classList.add("showevent");

  closeForm.addEventListener("click", () => {
    overLay.classList.remove("showevent");
  });
});
