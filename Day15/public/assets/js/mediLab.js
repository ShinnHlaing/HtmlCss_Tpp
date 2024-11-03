let faqTitle = document.getElementsByClassName("faqTitle");
var index;
for (index = 0; index < faqTitle.length; index++) {
  faqTitle[index].addEventListener("click", function () {
    let showText = this.nextElementSibling;
    let dropDown = this.lastElementChild;
    let parent = this.parentElement;
    if (showText.classList.contains("hidden")) {
      showText.classList.remove("hidden");
      dropDown.classList.add("fa-angle-down");
      dropDown.classList.remove("fa-chevron-right");
    } else {
      showText.classList.add("hidden");
      dropDown.classList.add("fa-chevron-right");
      dropDown.classList.remove("fa-angle-down");
    }
  });
}

let dep = document.getElementsByClassName("department");
let depBox = document.getElementsByClassName("depBox");
let x;
document.addEventListener("DOMContentLoaded", () => {
  depBox[0].classList.add("flex");
  depBox[0].classList.remove("hidden");
  dep[0].classList.add("border-r-2", "border-r-accentColor");
  for (x = 0; x < dep.length; x++) {
    let getDepVal = dep[x].getAttribute("data-field");
    let getBoxVal = depBox[x].getAttribute("id");
    dep[x].addEventListener("click", function () {
      for (let val = 0; val < depBox.length; val++) {
        depBox[val].classList.add("hidden");
        dep[val].classList.remove("border-r-2", "border-r-accentColor");
      }
      if (getDepVal === getBoxVal) {
        depBox[getBoxVal].classList.add("flex");
        depBox[getBoxVal].classList.remove("hidden");
        dep[getBoxVal].classList.add("border-r-2", "border-r-accentColor");
      }
    });
  }
});
