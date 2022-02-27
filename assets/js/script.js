const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");
const rotate = document.querySelectorAll(".resend");
const arrow = document.querySelectorAll("#imgg");
let removeDevice = document.querySelectorAll("#remove_device");
let deviceTracks = document.querySelector(".track");
let changePassword = document.querySelector(".changePassword");
let claimPassword = document.querySelector(".change_password");
let removePasswordForm = document.querySelector("#pass_form");

// Intialize this block to remove devices at "Where you are logged in"
for (let e = 0; e < removeDevice.length; e++) {
  const forDelete = removeDevice[e];
  forDelete.addEventListener("click", () => {
    deviceTracks.style.visibility = "hidden";
  });
}

// Change Users Password
changePassword.addEventListener("click", () => {
  claimPassword.classList.add("active");
  removePasswordForm.addEventListener("click", () => {
    claimPassword.classList.remove("active");
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
