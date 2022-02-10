const eventBtn = document.querySelector("#events");
const overLay = document.querySelector(".overlay");
const closeForm = document.querySelector(".b_transparent");

eventBtn.addEventListener("click", () => {
  overLay.classList.add("showevent");

  closeForm.addEventListener("click", () => {
    overLay.classList.remove("showevent");
  });
});

// function searchEvents() {
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("eventinput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myCards");
//   li = ul.getElementsByClassName("main_card");

//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
