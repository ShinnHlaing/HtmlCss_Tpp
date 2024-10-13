var menu = document.getElementById("menu");
var icon = document.getElementById("icon");
var close = document.getElementById("close");

icon.addEventListener("click", function () {
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  icon.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function (event) {
  event.stopPropagation();
  icon.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";
  window.location.reload();
});
