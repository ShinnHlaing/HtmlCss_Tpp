let display = document.getElementById("display");
let select = document.getElementById("select");
select.addEventListener("change", () => {
  let selectImg = select.value;
  let img = document.createElement("img");
  img.src = `./assets/img/${selectImg}`;
  display.innerHTML = "";
  display.append(img);
});
