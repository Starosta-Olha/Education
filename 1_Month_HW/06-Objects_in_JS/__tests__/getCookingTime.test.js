const { getCookingTime } = require('../src/getCookingTime');

describe('eggsAmount', () => {

    test('not arguments value',() => {
        expect(getCookingTime()).toBe('no value entered');
    });

    test('entered not a number',() => {
        expect(getCookingTime('125')).toBe('insert the number');
    });

    test('entered not an integer',() => {
        expect(getCookingTime(5.5)).toBe('enter an integer');
    });

    test('number % 5 === 0',() => {
        expect(getCookingTime(10)).toBe(10);
    });

    test('number % 5 !== 0',() => {
        expect(getCookingTime(31)).toBe(35);
    });
})