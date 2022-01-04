// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц.
//     Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime(eggsAmount) {
    let result;

    if (!eggsAmount) {
        return 'no value entered';
    }

    if (typeof eggsAmount !== 'number') {
        return 'insert the number'
    }

    if (eggsAmount % 1 !== 0) {
        return 'enter an integer';
    }

    result = Math.ceil(eggsAmount / 5) * 5;

    return result;
}

module.exports = { getCookingTime };