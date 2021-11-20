const btn = document.querySelector("#btn");
const hexValue = document.querySelector("#hex-value");
const body = document.querySelector("body");

const generateColor = () => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  hexValue.innerText = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

// Solution (Permet de générer un id aléatoire)
(function () {
  const button = document.querySelector("#btn");
  const body = document.querySelector("body");
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const value = document.querySelector("#hex-value");

  button.addEventListener("click", changeHex);

  function changeHex() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }
})();
