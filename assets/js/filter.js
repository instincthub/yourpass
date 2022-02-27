function searchEvents() {
  var input, filter, li, txtValue;
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

function tableAttendee() {
  var userSearch, loopThrough, allList, trackValue;
  userSearch = document.getElementById("tableEvents");
  loopThrough = userSearch.value.toUpperCase();
  allList = document.getElementsByClassName("track_data");

  for (i = 0; i < allList.length; i++) {
    // allList[i].style.display = "none";
    trackValue = allList[i].textContent || allList[i].innerText;
    if (trackValue.toUpperCase().indexOf(loopThrough) > -1) {
      allList[i].style.display = "";
    } else {
      allList[i].style.display = "none";
    }
  }
}
