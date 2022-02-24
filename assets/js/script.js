const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");
const rotate = document.querySelectorAll(".resend");
const arrow = document.querySelectorAll("#imgg");

for (let i = 0; i < rotate.length; i++) {
  const round = rotate[i];
  round.addEventListener("click", () => {
    arrow.classList.toggle("trans");
  });
}

if (eventBtn) {
  eventBtn.addEventListener("click", () => {
    overLay.classList.add("showevent");

    closeForm.addEventListener("click", () => {
      overLay.classList.remove("showevent");
    });
  });
}
