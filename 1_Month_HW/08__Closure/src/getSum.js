/*Напишите функцию, которая получает два бесконечных числа в
виде строк. Вы должны вернуть результат суммы этих двух чисел
в виде строки. Математическая работа с этими двумя числами
недоступна. Не используйте BigInt.
getSum(‘123’, ‘324’) -> ‘447’
getSum(‘111111111111111111111111111111111111111111111111111’,
’23333333333333333333333333333333333333333333333333’)
-> ‘3444444.......4444444’*/


function getSum(num1, num2) {
    let sum = '';
    console.log(+num1)

    if (!((num1 && num2) || typeof num1 === 'string' || num2 === 'string')){

        return 'entered incorrect data';
    }

    if (!(typeof +num1 === 'number' || typeof +num2 === 'number')) {

        return NaN;
    }

    if (!num1) {

        return num2;
    }

    if (!num2) {

        return num1;
    } else {

        const nums = [+num1, +num2]
        sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    return sum.toString();
}

console.log(getSum('111111111111111111111111111111111111111111111111111',
    '233333333333333333333333333333333333333333333333333'));
console.log(getSum('123', '324'))

module.exports = { getSum };