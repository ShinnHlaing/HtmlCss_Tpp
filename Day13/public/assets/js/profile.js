let overview = document.getElementById("overview");
console.log(overview);

let setting = document.getElementById("setting");
let pwChange = document.getElementById("change_password");
let list = document.getElementsByClassName("tab");
let box = document.getElementsByClassName("box");

document.addEventListener("DOMContentLoaded", () => {
  box[0].classList.remove("hidden");
  for (let index = 0; index < list.length; index++) {
    //   console.log(list[index]);
    let getAttrVal = list[index].getAttribute("data-field");
    let getId = box[index].getAttribute("id");

    list[index].addEventListener("click", () => {
      for (let val = 0; val < box.length; val++) {
        box[val].classList.add("hidden");
      }
      if (getAttrVal === getId) {
        box[index].classList.toggle("hidden");
      }
    });
  }
});
