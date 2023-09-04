
const nameInput = document.querySelector('#name-input');
const nameInSpan = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    if (nameInput.value.trim() !== "") {
    return nameInSpan.textContent = event.currentTarget.value;
    }
    return nameInSpan.textContent = "Anonymous";
});
