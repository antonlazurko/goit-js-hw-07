const rangeControl = document.querySelector('#font-size-control');
const spanInputText = document.querySelector('#text');
rangeControl.addEventListener('input', checkRangePosition);
function checkRangePosition(event) {
  spanInputText.style.fontSize = `${event.currentTarget.value}px`;
}
