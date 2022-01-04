//Циклы


// 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSum_AmountEvenNum(min, max) {
    let sum = 0;
    let amount = 0;

    for (let i = min; i <= max; i++) {

        if (i % 2 === 0) {
            sum += i;
            amount++;
        }
    }
    return [sum, amount];
}

console.log(getSum_AmountEvenNum(1, 99));


//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function isPrimeNumber(number) {
    let count = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count = count + 1;
        }
    }

    if (count !== 0 && number !== 2) {
        return false;
    } else {
        return true;
    }
}

console.log(isPrimeNumber(6));


//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)const n = 12;

// последовательный подбор

function calcSearchSqrt(number) {
    let result;

    if (number === 0 || number === 1) {
        return number;
    }

    for (let i = 0; i <= number; i++) {
        let sqrtNumber = number ** 0.5;

        if ((sqrtNumber - sqrtNumber % 1) === i) {
            result = i;
        }
    }
    return result;
}

console.log(calcSearchSqrt(9));


// бинарный поиск

function binarySearchSqrt(number) {
    let result = 0;

    if (number === 0 || number === 1) {
        return number;
    }

    let start = 0;
    let end = number;

    while (start <= end) {
        let mid = (start + end) / 2;
        mid = (mid - mid % 1);

        if (mid * mid === number) {
            return mid;
        }

        if (mid * mid < number) {
            start = mid + 1;
            result = mid;

        } else {
            end = mid - 1;
        }
    }
    return result;
}

console.log(binarySearchSqrt(9));


//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;

function calcFactorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calcFactorial(5));

//5.	Посчитать сумму цифр заданного числа

function calcSumOfDigits(number) {
    let n = number.toString().split("");
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum = sum + +n[i];
    }

    return sum;
}

console.log(calcSumOfDigits(1234));


//6.	Вывести число, которое является зеркальным отображением последовательности
//      цифр заданного числа, например, задано число 123, вывести 321.

function getMirrorNumber(num) {
    let mirrorNum = '';
    let number = num.toString().split('');

    for (let i = number.length - 1; i >= 0; i--) {
        mirrorNum = mirrorNum + number[i];
    }

    return mirrorNum;
}

console.log(getMirrorNumber(123456));

exports.getSum_AmountEvenNum = getSum_AmountEvenNum;
exports.isPrimeNumber = isPrimeNumber;
exports.calcSearchSqrt = calcSearchSqrt;
exports.binarySearchSqrt = binarySearchSqrt;
exports.calcFactorial = calcFactorial;
exports.calcSumOfDigits = calcSumOfDigits;
exports.getMirrorNumber = getMirrorNumber;