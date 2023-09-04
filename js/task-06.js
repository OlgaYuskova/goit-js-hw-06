
const isValidInput = document.querySelector('#validation-input')
const ValidInput = document.querySelector('#validation-input')


isValidInput.addEventListener("blur", (event) => {
    isValidInput.classList.remove('invalid', 'valid');

    if (isValidInput.value.length === parseInt(isValidInput.dataset.length)) {
        isValidInput.classList.add('valid');
    } else {
        isValidInput.classList.add('invalid');
    }
});

