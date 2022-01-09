const minNum = document.getElementById('minNum');
const maxNum = document.getElementById('maxNum');
const generate = document.getElementById('generate');
const randomNum = document.getElementById('randomNum');


function randomNumber(min, max) {
    min = minNum.value ? +minNum.value : '';
    max = maxNum.value ? +maxNum.value: '';
    console.log(min, max)
    const arrRandomNum = [];
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(number);


    if(arrRandomNum.includes(number)) {
        randomNumber();
        return;
    }

    if (min > max) {
        randomNum.innerHTML = 'Invalid input data: MIN > MAX';
        return;
    }

    if (min === '' && max === '') {
        randomNum.innerHTML = 'Please, enter Min and Max value';
        return;
    }

    if (isNaN(min) || isNaN(max)) {
        generate.disabled = false;
        randomNum.innerHTML = 'Please, enter only a numbers';
        return;
    }

    if (min === '' && max !== '') {
        generate.disabled = false;
        randomNum.innerHTML = 'Please, enter Min value';
        return;
    }

    if (max === '' && min !== '') {
        randomNum.innerHTML = 'Please, enter Max value';
        return;
    }

    if (arrRandomNum.length === max - min) {
        generate.disabled = true;
        randomNum.innerHTML = 'Generated number: Elements are over';
        return;
    }

    randomNum.innerHTML = `Generated number: ${number}`;

    arrRandomNum.push(number);
}

function resetBut() {
    minNum.value = '';
    maxNum.value = '';
    randomNum.innerHTML = '';
    arrRandomNum.length = 0;
    generate.disabled = false;
}
 module.exports = { randomNumber }