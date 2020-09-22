const inputValue = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
console.log(boxes);
const inputValueEvt = inputValue.addEventListener('input', onInputEvt);

function onInputEvt() {
  const items = [];
  let itemEl = '';
  const num = inputValue.value;
  for (let i = 0; i < num; i += 1) {
    items.push(inputValue.value);
    items.forEach(el => (itemEl = boxes.createElement('div')));
  }
}
function createBoxes(amount) {
  amount;
}
