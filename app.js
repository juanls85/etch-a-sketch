const promptButton = document.querySelector("button");

function genGrid(num) {
  const containerDiv = document.querySelector(".container");
  containerDiv.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  containerDiv.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      containerDiv.appendChild(document.createElement("div"));
    }
  }
}

function randoValue() {
  return Math.floor(Math.random() * 255);
}

function etch(num) {
  genGrid(num);
  let divList = document.querySelectorAll(".container div");

  divList.forEach(div => div.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = `rgb(${randoValue()}, ${randoValue()}, ${randoValue()})`;
  }))
}

promptButton.addEventListener("click", function () {
  // clear existing "grid"
  let divList = document.querySelectorAll(".container div")
  divList.forEach(div => div.remove());


  // write condition if input is not a number
  let area = Number(prompt("Enter length:"));

  etch(area);
});

