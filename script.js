const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

const incrementCounter = () => {
    const currentValue = +counterValueEl.textContent;

    let newValue = currentValue + 1;

    if (newValue > 5) {
        newValue = 5;
        counterEl.classList.add("counter--limit");
        counterTitleEl.innerHTML = "Limit! Buy <strong>Pro</strong> For > 5";

        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }

    counterValueEl.textContent = newValue;

    increaseButtonEl.blur();
};

const decrementCounter = () => {
    const currentValue = +counterValueEl.textContent;

    if (!currentValue) return;

    const newValue = currentValue - 1;

    counterValueEl.textContent = newValue;

    decreaseButtonEl.blur();
};

const resetCounter = () => {
    counterValueEl.textContent = 0;

    counterEl.classList.remove("counter--limit");
    counterTitleEl.textContent = "Fancy Counter";
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    resetButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

resetButtonEl.addEventListener("click", resetCounter);

document.addEventListener("keydown", incrementCounter);
