let submit = document.getElementById("submit");
let form = document.getElementById("form");
let username = document.getElementById("name");
let lastname = document.getElementById("lastname");
let id = document.getElementById("id");
let email = document.getElementById("email");
let pw = document.getElementById("password");
let confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  check();
});

let check = () => {
  let nameValue = username.value.trim();
  let lastnameValue = lastname.value.trim();
  let emailValue = email.value.trim();
  let idValue = id.value.trim();
  let pwValue = pw.value.trim();
  let confirmValue = confirm.value.trim();
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
  // lastname
  if (lastnameValue === "") {
    alertMsg(lastname, "lastname is required");
  } else {
    successMsg(lastname);
  }
  // id
  if (idValue === "") {
    alertMsg(id, "id is required");
  } else {
    successMsg(id);
  }
  // password
  if (pwValue === "") {
    alertMsg(pw, "password is required");
  } else if (pwValue.length < 8) {
    alertMsg(pw, "Password must be at least 8 character.");
  } else {
    successMsg(pw);
  }
  // pw confirm
  if (confirmValue === "") {
    alertMsg(confirm, "Please confirm your Password");
  } else if (pwValue !== confirmValue) {
    alertMsg(confirm, "Passwords doesn't match");
  } else {
    successMsg(confirm);
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
  parentDiv.classList.add("error");
  parentDiv.classList.remove("success");
};
