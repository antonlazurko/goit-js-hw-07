const amountItems = document.querySelectorAll('.item');
console.log(`В списке ${amountItems.length} категории.`);
const itemList = document.querySelectorAll('.item');
itemList.forEach(el =>
  console.log(
    `Категория: ${el.children[0].textContent}\nКоличество элементов: ${el.children[1].children.length}`,
  ),
);
