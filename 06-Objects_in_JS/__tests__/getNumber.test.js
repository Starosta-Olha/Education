const { getNumber } = require('../src/getNumber');

describe('eggsAmount', () => {

    test('the passed value is not an array',() => {
        expect(getNumber(1, 2 , 3)).toBe(false);
    });

    test('the passed value is null',() => {
        expect(getNumber('125')).toBe(false);
    });

    test('array includes even values except one',() => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    });

    test('array includes odd values except one',() => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    });
})