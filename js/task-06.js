
const isValidInput = document.querySelector('#validation-input')
const ValidInput = document.querySelector('#validation-input')


isValidInput.addEventListener("blur", (event) => {
    if (isValidInput.value.length >= isValidInput.dataset.length) {
        isValidInput.classList.add('valid');
        isValidInput.classList.remove('invalid');
    } else {
        isValidInput.classList.add('invalid');
    }
});