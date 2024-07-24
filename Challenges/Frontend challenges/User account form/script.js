const isEmployed = document.querySelector("input[type=checkbox]");

const rightSection = document.getElementsByClassName("right");

isEmployed.addEventListener('change', function () {
    const companyName = document.getElementById("companyName");
    const isDisabled = companyName.disabled;


    const passiveIncomeBtn = document.getElementById("passiveIncome");
    const newElement = document.createElement('input');

    newElement.type = isDisabled ? 'checkbox' : 'radio';
    newElement.id = 'passiveIncome';
    newElement.checked = passiveIncomeBtn.checked;

    if (!isDisabled) {
        companyName.value = null;
    }

    passiveIncomeBtn.replaceWith(newElement);
    companyName.disabled = !isDisabled;
});

function isValid(value) {
    if (!(/^[a-z0-9]+$/i).test(value)) {
        return false;
    }
    if (value.length > 10 || value.length < 3) {
        return false;
    }
    return true;
}

const inputs = document.querySelectorAll("input:not([type=checkbox])");

inputs.forEach(input => {
    input.addEventListener('change', function () {
        if (isValid(input.value)) {
            input.parentElement.classList.remove("invalid");
        } else {
            input.parentElement.classList.add("invalid");
        }
    });
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = () => {
    const inputs = document.querySelectorAll("input:enabled:not([type=checkbox])");
    inputs.forEach(input => {
        if (isValid(input.value)) {
            input.parentElement.classList.remove("invalid");
        } else { input.parentElement.classList.add("invalid"); }
    });
};




