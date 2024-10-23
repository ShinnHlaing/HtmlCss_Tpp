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
  let body = document.body;
  popup.style.display = "block";
  body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}

function closePopup() {
  let popup = document.getElementById("popupBox");
  popup.style.display = "none";
}
