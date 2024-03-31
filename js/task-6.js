//Завдання 6
// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

//Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const elementsArea = document.querySelector("#boxes");
// const buttonCreate = document.querySelector("button[data-create]");
// const buttonDestroy = document.querySelector("button[data-destroy]");
// const inputText = document.querySelector("input");

// buttonDestroy.addEventListener("click", () => {
//   elementsArea.innerHTML = "";
// });

// inputText.addEventListener("input", (event) => {
//   const inputValue = Number(event.target.value);

//   if (inputValue > 0 && inputValue < 100) {
//     console.log(inputValue);

//     buttonCreate.addEventListener("click", () => {
//       elementsArea.innerHTML = "";
//       inputText.value = "";
//       let widthSquare = 30;
//       let heightSquare = 30;

//       for (let i = 0; i < inputValue; i++) {
//         const divEl = document.createElement("div");
//         divEl.classList.add("element");
//         divEl.style.backgroundColor = getRandomHexColor();
//         divEl.style.height = `${heightSquare}px`;
//         divEl.style.width = `${widthSquare}px`;
//         elementsArea.appendChild(divEl);
//         widthSquare += 30;
//         heightSquare += 30;
//       }
//     });
//   }
// });
/////------------------------------------------------------------------------/////

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elementsArea = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputText = document.querySelector("input");

buttonDestroy.addEventListener("click", () => {
  elementsArea.innerHTML = "";
  inputText.value = "";
});

inputText.addEventListener("input", (event) => {
  const inputValue = Number(event.target.value);

  if (inputValue > 0 && inputValue < 100) {
    buttonCreate.addEventListener("click", () => {
      elementsArea.innerHTML = "";
      inputText.value = "";
      let widthSquare = 30;
      let heightSquare = 30;

      for (let i = 0; i < inputValue; i++) {
        const divEl = document.createElement("div");
        divEl.classList.add("element");
        divEl.style.backgroundColor = getRandomHexColor();
        divEl.style.height = `${heightSquare}px`;
        divEl.style.width = `${widthSquare}px`;
        elementsArea.appendChild(divEl);
        widthSquare += 30;
        heightSquare += 30;
      }
    });
  }
});

/////------------------------------------------------------------------------/////
