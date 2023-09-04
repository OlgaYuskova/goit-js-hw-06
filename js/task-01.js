const categoriesEl = document.querySelectorAll( ".item")

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(categoryItem => {
    const nameCategoryEl = categoryItem.querySelector("h2").textContent;
    const lengthItemEl = categoryItem.querySelectorAll("li" ).length;

    console.log(`Category: ${nameCategoryEl}`)
    console.log(`Elements: ${lengthItemEl}`)
})