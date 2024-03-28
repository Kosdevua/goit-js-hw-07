// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// 1.Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль a) текст заголовка елемента (тегу <h2>) і
// b) кількість елементів у категорії (усіх <li>, вкладених у нього).

const categoryEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoryEl.length);

categoryEl.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
