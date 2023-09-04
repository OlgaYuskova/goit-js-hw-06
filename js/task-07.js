const fontSizeEl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeEl.addEventListener("input", (event) => {
    textRef.style.fontSize = event.currentTarget.value + "px";
});