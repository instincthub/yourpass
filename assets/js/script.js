const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");
const rotate = document.querySelectorAll(".resend");
const arrow = document.querySelectorAll("#imgg");
let removeDevice = document.querySelectorAll("#remove_device");
let deviceTracks = document.querySelector(".track");
// for (let i = 0; i < rotate.length; i++) {
//   const round = rotate[i];
//   round.addEventListener("click", () => {
//     arrow.classList.toggle("trans");
//   });
// }

removeDevice.forEach((rdx) => {
  rdx.addEventListener("click", () => {
    // deviceTracks.forEach((dtc) => {
    deviceTracks.style.visibility = "hidden";
    // });
  });
});

rotate.forEach(function (rotat) {
  rotat.addEventListener("click", () => {
    arrow.forEach((arr) => {
      arr.classList.toggle("trans");
    });
  });
});

if (eventBtn) {
  eventBtn.addEventListener("click", () => {
    overLay.classList.add("showevent");

    closeForm.addEventListener("click", () => {
      overLay.classList.remove("showevent");
    });
  });
}
