// Завдання 5
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const spanElement = document.querySelector(".color");

buttonElement.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  spanElement.style.color = randomColor;
});
