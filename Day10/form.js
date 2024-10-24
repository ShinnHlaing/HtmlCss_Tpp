var formInput = document.querySelectorAll("input");
var submit = document.getElementById("submit");
var showRequire = document.getElementsByClassName("notiText");
// input
var user = document.getElementById("name");
var lastName = document.getElementById("lastname");
var id = document.getElementById("id");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");
// p
var pName = document.getElementById("pName");
var pLast = document.getElementById("pLName");
var pId = document.getElementById("pId");
var pEmail = document.getElementById("pEmail");
var pPw = document.getElementById("pPw");
var pwConfirm = document.getElementById("pConfirm");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  // var fullName = user.value;
  // var lastname = lastName.value;
  // var userId = id.value;
  // var userEmail = email.value;
  // var userPw = password.value;
  // var pwConfirm = confirm.value;
});

// formInput.forEach(function (input) {
//   console.log(input.value);

//   if (input.value === "") {
//     console.log("reqired");
//   } else {
//     console.log("ok");
//   }
// });
