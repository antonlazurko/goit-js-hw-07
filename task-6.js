const inputText = document.querySelector('#validation-input');
inputText.addEventListener('blur', checkValidInputLength);
function checkValidInputLength(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputText.getAttribute('data-length'))
  ) {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  } else {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  }
}
