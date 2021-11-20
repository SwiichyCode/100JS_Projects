const btn = document.querySelector(".btn");
const container = document.querySelector("body");

const colors = ["red", "green", "purple", "blue"];

function randomColors(color) {
  return color[Math.floor(Math.random() * color.length)];
}

btn.addEventListener("click", () => {
  container.style.background = randomColors(colors);
});
