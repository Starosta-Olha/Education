document.addEventListener('DOMContentLoaded', () => {
    calculator()
})
const result = document.getElementById('display');
const trigStatus = document.getElementById('trig-status');
let power = '';
let flag = Boolean;

function calculator() {
    result.innerText = '0';
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.map((button) => {
        button.onclick = function() {

            let clickCell = this.dataset.value;
            console.log(clickCell)
            switch (clickCell) {
                case 'AC':
                    clear();
                    break;

                case '←':
                    backspace()
                    break;

                case '+/-':
                    if (result.innerText === '') {
                        return;
                    } else {
                        result.innerText = -1 * result.innerText;
                    }
                    break;

                case '=':
                    equal();
                    break;

                case '%':
                    percent(clickCell)
                    break;

                case '10x':
                    operation(clickCell);
                    break;

                case 'ex':
                    operation(clickCell)
                    break;

                case '^':
                    operation(clickCell);
                    break;

                case 'x3':
                    operation(clickCell);
                    break;

                case 'x2':
                    operation(clickCell);
                    break;

                case '2nd':
                    break;

                case '1/x':
                    operation(clickCell)
                    break;

                case '2√x':
                    operation(clickCell);
                    break;

                case '3√x':
                    operation(clickCell);
                    break;

                case 'y√x':
                    operation(clickCell)
                    break;

                case 'ln':
                    log(clickCell);
                    break;

                case 'log':
                    log(clickCell);
                    break;

                case 'EE':
                    ee(clickCell);
                    break;

                case 'e':
                    constant(clickCell);
                    break;

                case 'tan':
                    trigonometry(clickCell);
                    break;

                case 'cos':
                    trigonometry(clickCell);
                    break;

                case 'sin':
                    trigonometry(clickCell);
                    break;

                case 'n!':
                    factorial(clickCell);
                    break;

                case 'rad':
                    this.dataset.value = 'deg'
                    this.innerText = 'deg';
                    trigStatus.innerText = 'deg';
                    break;

                case 'deg':
                    this.dataset.value = 'rad'
                    this.innerText = 'rad';
                    trigStatus.innerText = 'rad';
                    break;

                case 'sinh':
                    break;

                case 'cosh':
                    break;

                case 'tanh':
                    break;

                case 'pi':
                    constant(clickCell);
                    break;

                case 'Rand':
                    rand();
                    break;

                case '|x|':
                    module();
                    break;

                case 'mod':
                    operation(clickCell);
                    break;

                case 'exp':
                    break;

                default:
                    display(clickCell);
            }

        };
    });
}

function display(clickCell) {
    if (result.innerText === '0') {
        result.innerText = '';
        result.innerText = result.innerText + clickCell;
    } else {
        result.innerText = result.innerText + clickCell;
    }
}

function clear() {
    result.innerText = '0';
    power = '';
}

function backspace() {
    if (result.innerText) {
        result.innerText = result.innerText.slice(0, -1);
    }

    if (result.innerText === '') {
        result.innerText = '0';
    }
}


function equal() {
    let res = result.innerText;

    if (flag === true) {
        result.innerText = Math.pow(10, res) * power;
        power = '';
        flag = false;
        return;
    }

    if (result.innerText.includes('^')) {
        const temp = result.innerText.split('^');
        const num = eval(power);
        const pow = +temp[1];
        console.log(typeof num);
        result.innerText = Math.pow(num, temp[1]);
        power = '';
        return;
    }

    if (result.innerText.includes('mod')) {
        const temp = result.innerText.split('mod');
        const pow = +temp[1];
        result.innerText = power % pow;
        power = '';
        return;
    }

    if (result.innerText.includes('√')) {
        const temp = result.innerText.split('√')
        console.log(temp)
        const pow = +temp[1]
        result.innerText = (Math.pow(pow,1 / power))
        power = '';
        return;
    }

    if (res) {
        result.innerText = eval(res);
    }
}

function operation(clickCell) {
    console.log('clickCell (operation):' + clickCell);
    if (result.innerText === '0') {
        result.innerText = '';
    }
    if (clickCell === '2√x') {
        result.innerText = Math.sqrt(eval(result.innerText));
    }
    if (clickCell === '3√x') {
        result.innerText = Math.cbrt(eval(result.innerText));
    }
    if (clickCell === 'y√x') {
        power = result.innerText;
        result.innerText += '√'
    }
    if (clickCell === 'x2') {
        result.innerText = Math.pow(eval(result.innerText), 2);
    }
    if (clickCell === '10x') {
        result.innerText = Math.pow(10, result.innerText);
    }
    if (clickCell === 'x3') {
        result.innerText = Math.pow(eval(result.innerText), 3);
    }
    if (clickCell === '^') {
        power = eval(result.innerText);
        result.innerText += '^'
    }
    if (clickCell === '1/x') {
        result.innerText = 1 / result.innerText;
    }
    if (clickCell === 'ex') {
        result.innerText = Math.exp(result.innerText).toFixed(8);
    }
    if (clickCell === 'mod') {
        console.log(5)
        power = eval(result.innerText);
        result.innerText += 'mod'
    }
}

    function constant(clickCell) {
        if (result.innerText === '0') {
            result.innerText = '';
        }
        if (clickCell === 'pi') {
            result.innerText = result.innerText * Math.PI.toFixed(8)
        }
        if (clickCell === 'e') {
            result.innerText = result.innerText * Math.E.toFixed(8)
        }
    }

    function rand() {
        result.innerText = Math.random().toFixed(8)
    }

    function percent() {
        result.innerText = eval(result.innerText) / 100;
    }

    function trigonometry(clickCell) {
        if (clickCell === 'sin') {
            if (document.getElementById('toggle').dataset.value === 'deg') {
                result.innerText = parseFloat(Math.sin(eval(result.innerText) / 180 * Math.PI)
                    .toFixed(8).toString());
            } else {
                result.innerText = parseFloat(Math.sin(eval(result.innerText))
                    .toFixed(8).toString());
            }
        }
        if (clickCell === 'cos') {
            if (document.getElementById('toggle').dataset.value === 'deg') {
                result.innerText = parseFloat(Math.cos(eval(result.innerText) / 180 * Math.PI)
                    .toFixed(8).toString());
            } else {
                result.innerText = parseFloat(Math.cos(eval(result.innerText))
                    .toFixed(8).toString());
            }
        }
        if (clickCell === 'tan') {
            if (document.getElementById('toggle').dataset.value === 'deg') {
                result.innerText = parseFloat(Math.tan(eval(result.innerText) / 180 * Math.PI)
                    .toFixed(8).toString());
            } else {
                result.innerText = parseFloat(Math.tan(eval(result.innerText))
                    .toFixed(8).toString());
            }
        }
        if (clickCell === 'ctg') {
            if (document.getElementById('toggle').dataset.value === 'deg') {
                result.innerText = parseFloat(1 / Math.tan(eval(result.innerText) / 180 * Math.PI)
                    .toFixed(8).toString());
            } else {
                result.innerText = parseFloat(1 / Math.tan(eval(result.innerText))
                    .toFixed(8).toString());
            }
        }

        if (clickCell === 'ctg') {
            if (document.getElementById('toggle').dataset.value === 'deg') {
                result.innerText = parseFloat(1 / Math.tan(eval(result.innerText) / 180 * Math.PI)
                    .toFixed(8).toString());
            } else {
                result.innerText = parseFloat(1 / Math.tan(eval(result.innerText))
                    .toFixed(8).toString());
            }
        }
    }

    function fact(n) {
        return (n !== 1) ? n * fact(n - 1) : 1;
    }

    function factorial() {
        result.innerText = fact(eval(result.innerText));
    }

    function log(clickCell) {
        if (clickCell === 'log') {
            result.innerText = Math.log10(result.innerText);
        }
        if (clickCell === 'ln') {
            result.innerText = Math.log(result.innerText);
        }
    }

    function ee() {
        power = result.innerText;
        result.innerText = '';
        flag = true;
    }

    function module() {
        result.innerText = Math.abs(eval(result.innerText));
    }
    