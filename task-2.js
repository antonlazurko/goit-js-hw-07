const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
let itemEl = '';
const ingredientsList = document.querySelector('#ingredients');
const ingredientsArray = ingredients.map(option => {
  itemEl = document.createElement('li');
  itemEl.textContent = option;
  return itemEl;
});
ingredientsList.append(...ingredientsArray);
