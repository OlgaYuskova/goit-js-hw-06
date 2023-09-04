const countValue = document.querySelector("#value")
let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');

const subtractButtonClickHandler = () => {
    counterValue -= 1;
    countValue.textContent = counterValue;
};

decrementButton.addEventListener("click", subtractButtonClickHandler);

const incrementButton = document.querySelector('button[data-action="increment"]');

const addButtonClickHandler = () => {
    counterValue += 1;
    countValue.textContent = counterValue;
};

incrementButton.addEventListener("click", addButtonClickHandler); 