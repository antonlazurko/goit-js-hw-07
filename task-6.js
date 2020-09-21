const inputText6 = document.querySelector('#validation-input');
inputText6.addEventListener('blur', checkValidInputLength);
function checkValidInputLength(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputText6.getAttribute('data-length'))
  ) {
    inputText6.classList.remove('invalid');
    inputText6.classList.add('valid');
  } else {
    inputText6.classList.remove('valid');
    inputText6.classList.add('invalid');
  }
}
