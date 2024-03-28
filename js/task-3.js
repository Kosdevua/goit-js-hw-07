//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

// console.log(spanElement.textContent);

inputElement.addEventListener("input", (event) => {
  //   console.log(event.currentTarget.elements.value);
  console.log(event.target.value);
  if (event.target.value) {
    spanElement.textContent = event.target.value.trim() || "Anonymous";
  }
});
console.log("helo");
