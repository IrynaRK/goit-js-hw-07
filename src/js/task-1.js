const categoriesEl = document.querySelector("#categories");

const categoryItems = categoriesEl.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
