const inputText = document.querySelector('#name-input');
const outputTextContent = document.querySelector('#name-output');
inputText.addEventListener('input', takeInputText);
function takeInputText(event) {
  if (event.currentTarget.value !== '') {
    outputTextContent.textContent = event.currentTarget.value;
  } else outputTextContent.textContent = 'незнакомец';
}
