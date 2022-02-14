// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
// одного. Тебе нужно его найти.

function getNumber(array) {
    let result;

    if (!Array.isArray(array) || array === null) {
        return false;
    }

    let even = array.filter(i => i % 2 === 0);
    let odd = array.filter(i => i % 2 !== 0);

    if (odd.length > even.length) {
        result = even[0];
    } else {
        result = odd[0];
    }

    return result;
}

module.exports = { getNumber };
