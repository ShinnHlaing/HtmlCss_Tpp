let aside = document.getElementsByTagName("aside")[0];
let content = document.getElementById("content");
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    content.classList.toggle("active");
  });
});
// form

let submit = document.getElementById("submit");
let resetbtn = document.getElementById("reset");
let form = document.getElementById("form");
let username = document.getElementById("name");
let email = document.getElementById("email");
let pw = document.getElementById("password");
let address = document.getElementById("address");
let address2 = document.getElementById("address2");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let checkout = document.getElementById("check");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  check();
});

let check = () => {
  let nameValue = username.value.trim();
  let emailValue = email.value.trim();
  let pwValue = pw.value.trim();
  let addressVal = address.value.trim();
  let address2Val = address2.value.trim();
  let cityVal = city.value.trim();
  let stateVal = state.value.trim();
  let zipVal = zip.value.trim();
  // name
  if (nameValue === "") {
    alertMsg(username, "Username is required");
  } else {
    successMsg(username);
  }
  // email
  if (emailValue === "") {
    alertMsg(email, "Email is required");
  } else {
    successMsg(email);
  }
  // password
  if (pwValue === "") {
    alertMsg(pw, "password is required");
  } else if (pwValue.length < 8) {
    alertMsg(pw, "Password must be at least 8 character.");
  } else {
    successMsg(pw);
  }
  // address
  if (addressVal === "") {
    alertMsg(address, "address is required");
  } else {
    successMsg(address);
  }
  // id
  if (address2Val === "") {
    alertMsg(address2, "address2 is required");
  } else {
    successMsg(address2);
  }
  // city
  if (cityVal === "") {
    alertMsg(city, "Please add your city");
  } else {
    successMsg(city);
  }
  // state
  if (stateVal === "") {
    alertMsg(state, "Please choose your state");
  } else {
    successMsg(state);
  }
  // zip
  if (zipVal === "") {
    alertMsg(zip, "Please add your zipcode");
  } else {
    successMsg(zip);
  }
};

let successMsg = (element) => {
  let parentDiv = element.parentElement;
  let alertErr = parentDiv.querySelector(".error");
  alertErr.innerText = "";
  parentDiv.classList.add("success");
  parentDiv.classList.remove("error");
};

let alertMsg = (element, message) => {
  let parentDiv = element.parentElement;
  let alertErr = parentDiv.querySelector(".error");
  alertErr.innerText = message;
  parentDiv.classList.add("error", "text-orange");
  parentDiv.classList.remove("success");
};
