const { getSum  } = require('../src/getSum');

describe('getSum', () => {

    test('the value of arguments is missing',() => {
        expect(getSum()).toBe('entered incorrect data');
    });

    test('the value of the first argument is missing',() => {
        expect(getSum('125', '')).toBe('125');
    });

    test('the value of the second argument is missing',() => {
        expect(getSum ('', '125')).toBe('125');
    });

    test('it is impossible to cast a value to a number',() => {
        expect(getSum ('jjm,m', '125')).toBe('NaN');
    });

    test('get sum',() => {
        expect(getSum ('11111111111111111111111111111111111111111111111111',
        '23333333333333333333333333333333333333333333333333')).toBe('3444444444444444444444444444444444444444444444444');
    });

})