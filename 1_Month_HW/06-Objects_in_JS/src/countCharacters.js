/*4. Принимая строку, ваша функция должна вернуть обьект, в котором
ключи – символы строки, значение – количество повторений символов в
строке*/

function  countCharacters(string) {

    if (typeof string === 'undefined' || typeof string === 'null' || typeof string !== 'string'){
        return 'inputted incorrect data'
    }

    const newStr = string.toLowerCase().replace(/[^a-zа-я0-9]+/g, '').split('');

    return newStr.reduce((obj, key) => {

        obj[key] = (obj[key] || 0) + 1;

        return obj;

    }, {});

    // // return newStr.reduce((count, key) => {
    //
    //     if (!count[key]) {
    //         count[key] = 1;
    //     } else {
    //         count[key] = count[key] + 1;
    //     }
    //     return count;
    // }, {});

}

module.exports = { countCharacters };