const PROMPT_DELAY = 1000;
let timeoutId = null;


const start = document.querySelector('[data-start]')
const stopClick = document.querySelector('[data-stop]')
stopClick.disabled = true;

start.addEventListener('click', onClick)
stopClick.addEventListener('click', offClick)

function onClick() {
    start.disabled = true;
    stopClick.disabled = false;

    timeoutId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, PROMPT_DELAY)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function offClick() {
    clearInterval(timeoutId);
    start.disabled = false;
    stopClick.disabled = true;

};