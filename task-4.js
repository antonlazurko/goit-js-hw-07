const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});
