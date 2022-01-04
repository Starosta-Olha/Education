// 3. Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает массив
// объектов, которые содержат в своих заголовках заданную строку в
// качестве второго параметра (без учета регистра).

function findTitle(array, str) {

    if (!Array.isArray(array) || typeof str !== 'string') {

        return 'inputted incorrect data';
    }

    if (str === '') {

        return 'value not set';
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {

        for (let keys in array[i]) {

            if (array[i].hasOwnProperty('title')) {

                if (array[i][keys].toLowerCase().includes(str)) {

                    result.push(array[i]);
                }
            }
        }

    }

    return result;
}

module.exports = { findTitle };