//min8
//at least one lowercase
//at leastone upppercase
//at least one digit
//at least one symbol !@#$%
const pwd = prompt("Enter password");
function validpwd(pwd) {
  let rex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]){8,}/g;
  let result = rex.test(pwd);
  console.log(result);
  return result;
}

if (validpwd(pwd)) {
  alert("valid");
} else {
  alert("invalid");
}
