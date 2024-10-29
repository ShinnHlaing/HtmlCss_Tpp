let aside = document.getElementsByTagName("aside")[0];
let content = document.getElementById("content");
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    content.classList.toggle("active");
  });

  fetchApi();
});
// ------ fetch api ------------
function fetchApi() {
  fetch(
    "https://dummyjson.com/recipes?limit=10&skip=10&select=name,instructions",
    {
      method: "GET",
    }
  )
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error("network error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let cardOne = document.getElementById("card1");
      let cardtwo = document.getElementById("card2");
      let cardthree = document.getElementById("card3");
      let cardfour = document.getElementById("card4");
      let boxData = data.recipes;

      // console.log(boxData);
      for (let index = 0; index <= boxData.length - 8; index++) {
        // console.log(index);
        cardOne.innerHTML += `<div class="flex flex-col justify-center gap-1">
                  <h3>${boxData[index].name}</h3>
                  <p>${boxData[index].instructions[0]}</p>
                </div>`;
      }
      //2
      for (let index = 3; index < boxData.length - 2; index++) {
        cardtwo.innerHTML += `<div class="flex flex-col justify-center gap-3">
                  <div class="faqTitle flex justify-between items-center border-b" onclick="openBox()">
                    <div class="faq">${boxData[index].name}</div>
                    <div class="plus">+</div>
                  </div>
                  <div class="faqText hidden" id="hideBox">
                    <p>${boxData[index].instructions[0]}</p>
                  </div>
                </div>`;
      }
      //   3
      for (let index = 0; index < boxData.length - 5; index++) {
        cardthree.innerHTML += `<div class="flex flex-col justify-center gap-3">
                  <div class="faqTitle flex justify-between items-center border-b" onclick="openBox3()">
                    <div class="faq">${boxData[index].name}</div>
                    <div class="plus">+</div>
                  </div>
                  <div class="faqText hidden" id="hideBox">
                    <p>${boxData[index].instructions[0]}</p>
                  </div>
                </div>`;
      }
      //   4
      for (let index = 5; index < boxData.length; index++) {
        console.log(index);
        cardfour.innerHTML += `<div class="flex flex-col justify-center gap-3">
                  <div class="faqTitle flex justify-between items-center border-b" onclick="openBox4()">
                    <div class="faq">${boxData[index].name}</div>
                    <div class="plus">+</div>
                  </div>
                  <div class="faqText hidden" id="hideBox">
                    <p>${boxData[index].instructions[0]}</p>
                  </div>
                </div>`;
      }
    })
    .catch((error) => console.error("Error:", error));
}

function openBox() {
  let faq = document.getElementsByClassName("faqTitle");
  let text = document.getElementsByClassName("faqText");
  let plus = document.getElementsByClassName("plus");
  let isShow = false; /* set initial*/
  for (let index = 0; index < faq.length; index++) {
    isShow = !isShow; /*set true*/
    text[index].classList.toggle("show");
    if (text[index].classList.contains("show")) {
      plus[index].textContent = "-";
    } else {
      plus[index].textContent = "+";
    }
  }
}

function openBox3() {
  let faq = document.getElementsByClassName("faqTitle");
  let text = document.getElementsByClassName("faqText");
  let plus = document.getElementsByClassName("plus");
  let isShow = false; /* set initial*/
  for (let index = 0; index < faq.length; index++) {
    isShow = !isShow; /*set true*/
    text[index].classList.toggle("show");
    if (text[index].classList.contains("show")) {
      plus[index].textContent = "-";
    } else {
      plus[index].textContent = "+";
    }
  }
}

function openBox4() {
  let faq = document.getElementsByClassName("faqTitle");
  let text = document.getElementsByClassName("faqText");
  let plus = document.getElementsByClassName("plus");
  let isShow = false; /* set initial*/
  for (let index = 0; index < faq.length; index++) {
    isShow = !isShow; /*set true*/
    text[index].classList.toggle("show");
    if (text[index].classList.contains("show")) {
      plus[index].textContent = "-";
    } else {
      plus[index].textContent = "+";
    }
  }
}
