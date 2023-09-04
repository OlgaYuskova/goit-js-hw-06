
const nameInput = document.querySelector('#name-input');
const nameInSpan = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    if (nameInput.value !== "") {
    return nameInSpan.textContent = event.currentTarget.value;
    }
    return nameInSpan.textContent = "Anonymous";
});
