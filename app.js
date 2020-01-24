const promptButton = document.querySelector("button");

// Get side length from user
let area = 0;

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

function etch(num) {
  genGrid(num);
  let divList = document.querySelectorAll(".container div");
  divList.forEach(div => div.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "#222";
  }))
}

promptButton.addEventListener("click", function () {
  // write condition if input is not a number
  area = Number(prompt("Enter length:"));
  etch(area);
});

