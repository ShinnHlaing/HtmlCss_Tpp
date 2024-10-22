function show() {
  let menu = document.getElementById("hbMenu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function openPopup() {
  let popup = document.getElementById("popupBox");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("popupBox");
  popup.style.display = "none";
}
