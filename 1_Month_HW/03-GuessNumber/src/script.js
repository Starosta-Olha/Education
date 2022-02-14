const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');
const countAttemps = document.getElementById('countAttemps');
const start = document.querySelector('.game__guss_text');
const userNum = document.getElementById('userNum');
const generate = document.getElementById('generate');
const out = document.getElementById('out');
let count = 0;
let randomNumber = 0;
let inputMinVal = 1;
let inputMaxVal = 200;
let userNumVal = '';
let countAttempsVal = 0;

generate.disabled = true;
start.style.visibility = 'hidden';

function validGuess() {
    inputMinVal = inputMin.value ? +inputMin.value : '';
    inputMaxVal = inputMax.value ? +inputMax.value : '';
    countAttempsVal = countAttemps.value ? +countAttemps.value : '';

    if (inputMinVal === '' && inputMaxVal === '' && countAttempsVal === '') {
        out.innerHTML = 'Введите значения MIN, MAX и X-попыток';

        return false;
    }

    if (inputMinVal === '' && inputMaxVal === '') {
        out.innerHTML = 'Введите значения MIN и MAX';

        return false;
    }

    if (inputMinVal === '' && countAttempsVal === '') {
        out.innerHTML = 'Введите значения MIN и Х-попыток';

        return false;
    }

    if (inputMaxVal === '' && countAttempsVal === '') {
        out.innerHTML = 'Введите значения MAX и Х-попыток';

        return false;
    }

    if (inputMinVal === '') {
        out.innerHTML = 'Введите MIN значение диапазона';

        return false;
    }

    if (inputMaxVal === '') {
        out.innerHTML = 'Введите MAX значение диапазона';

        return false;
    }

    if (countAttempsVal === '') {
        out.innerHTML = 'Введите значение Х-попыток';

        return false;
    }

    if (countAttempsVal >= inputMaxVal) {
        out.innerHTML = 'Х-попыток не может быть больше или равно MAX';

        return false;
    }

    if (inputMinVal >= inputMaxVal) {
        out.innerHTML = 'MIN не может быть больше или равно MAX';

        return false;
    }

    if (inputMinVal !== '' && inputMaxVal !== '' && countAttempsVal !== '') {

        if (!(inputMinVal >= 1 && inputMinVal <= 200 && inputMinVal % 1 === 0 &&
            inputMaxVal >= 1 && inputMaxVal <= 200 && inputMaxVal % 1 === 0 &&
            countAttempsVal >= 1 && countAttempsVal <= 15 && countAttempsVal % 1 === 0)) {
            out.innerHTML = "Вы ввели некорректные значения!"

            return false;
        }

        out.innerHTML = '';
        start.style.visibility = 'visible';
        generate.disabled = false;
        randomNumber = Math.floor(inputMinVal + Math.random() * (inputMaxVal + 1 - inputMinVal));
        console.log('number: ' + randomNumber);

        return randomNumber;
    }
}

function generateNum() {
    const clue = inputMaxVal/2
    userNumVal = userNum.value ? +userNum.value : '';
    count = count + 1;

    if (userNumVal === '') {
        out.innerHTML = 'Вы не ввели число!'

        return false;
    }

    if (countAttempsVal >= 0) {
        if (userNumVal === randomNumber) {
            out.innerHTML = `Поздравляю! Ты угадал задуманное число за ${count + 1} попыток`;
        }

        if (userNumVal !== randomNumber && count < 2) {
            out.innerHTML = `Не угадал! Осталось ${countAttempsVal - 1} попыток.`;
        }
        if (userNumVal > randomNumber && count >= 2) {
            out.innerHTML = `Ваше число больше, чем загаданное. Осталось ${countAttempsVal - 1} попыток.`;
        } else if (userNumVal < randomNumber && count >= 2 && randomNumber > clue) {
            out.innerHTML = `Ваше число меньше, чем загаданное. Осталось ${countAttempsVal - 1} попыток.`;
        }
        countAttempsVal = countAttempsVal - 1;

        if (countAttempsVal === 0) {
            generate.disabled = true;
            out.innerHTML = 'Увы, Ваши попытки закончились. Вы проиграли!'
        }
    }

    return true;
}

function gameOver() {
    generate.disabled = true;
    out.innerHTML = '';
    start.style.visibility = 'hidden';
    inputMin.value = 1;
    inputMax.value = 100;
    countAttemps.value = 5;
    userNum.value = '';
    count = 0;
    return true;
}

