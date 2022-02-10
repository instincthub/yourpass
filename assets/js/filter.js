function searchEvents() {
  var input, filter, li, i, txtValue;
  input = document.getElementById("eventinput");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("main_card");

  for (i = 0; i < li.length; i++) {
    // li[i].style.display = "none";
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
