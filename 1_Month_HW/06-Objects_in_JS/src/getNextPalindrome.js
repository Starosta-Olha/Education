// Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
//     Палиндром - это слово, фраза, число или другая последовательность
// символов, которая читается так же, как вперед и назад, например,
// «мадам».
function getNextPalindrome(number) {

    if (typeof number !== 'number') {

        return 'inputted not a number'
    }

    if (number < 0) {

        return 'negative number is not palindrome'
    }

    if (number%1 !== 0) {

        return 'inputted incorrect data'
    }

    if (number.toString().length < 2) {

        return 11;
    }

        for (let i = number + 1; ; i++) {

            const reverse = i.toString().split('').reverse().join('');

            if (i.toString() === reverse) {

                return i;
            }

        }
}

module.exports = { getNextPalindrome };
