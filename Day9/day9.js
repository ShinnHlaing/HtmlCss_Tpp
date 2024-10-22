// let str = "Javascript,is,fun!";
// console.log(str.length);
// console.log(str.charAt(4));
// console.log(str.indexOf("fun"));
// console.log(str.substring(0, 4));
// console.log(str.includes("is"));
// console.log(str.lastIndexOf("s"));
// console.log(str.slice(-4));
// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.replace("fun", "good"));
// console.log(str.split(","));
// console.log(str.concat("+", "+"));
// console.log(str.repeat(3));
var user = document.getElementById("name");
var age = document.getElementById("age");
var info = document.getElementById("info");
var password = document.getElementById("password");
var card = document.getElementById("card");
user.addEventListener("input", updateInfo);
age.addEventListener("input", updateInfo);
card.addEventListener("input", updateInfo);

function updateInfo() {
  var fullName = user.value;
  var getUser = fullName.charAt(0).toUpperCase() + fullName.slice(1);
  var getAge = age.value;
  var hide = card.value;
  var lastFourDigits = hide.slice(-4);
  var asterisk = hide.slice(0, -4).replace(/./g, "*");
  var getPassword = asterisk + lastFourDigits;
  password.innerHTML = "Password is: " + getPassword;

  if (getUser || getAge !== "") {
    if (getUser && getAge) {
      info.innerHTML =
        "Hello, My name is " + getUser + " and My Age is " + getAge + ".";
    } else if (getUser) {
      info.innerHTML = "Hello, My name is " + getUser + ".";
    } else {
      info.innerHTML = "My Age is " + getAge + ".";
    }
  } else {
    info.innerHTML = "";
  }
}
