document.addEventListener("DOMContentLoaded", function () {
  let faq = document.getElementsByClassName("faqTitle");
  let text = document.getElementsByClassName("faqText");
  let plus = document.getElementsByClassName("plus");
  let isShow = false; /* set initial*/

  for (let index = 0; index < faq.length; index++) {
    faq[index].addEventListener("click", function () {
      isShow = !isShow; /*set true*/
      text[index].classList.toggle("show");
      if (isShow) {
        plus[index].textContent = "-";
      } else {
        plus[index].textContent = "+";
      }
    });
  }
});
