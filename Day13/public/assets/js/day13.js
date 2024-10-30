let aside = document.getElementsByTagName("aside")[0];
let content = document.getElementById("content");
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    content.classList.toggle("active");
  });
});

let sideNav = document.getElementsByClassName("sideNav");
let productMenu = document.getElementById("productMenu");
let blogMenu = document.getElementById("blogMenu");
let subBox = document.getElementsByClassName("subBox");

for (let index = 0; index < sideNav.length; index++) {
  let getsideAttr = sideNav[index].getAttribute("data-field");
  let getsubAttr = subBox[index].getAttribute("id");
  sideNav[index].addEventListener("click", () => {
    if (getsideAttr === getsubAttr) {
      subBox[index].classList.toggle("hidden");
    }
  });
}
