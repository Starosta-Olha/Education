const { countCharacters } = require('../src/countCharacters');

describe('countCharacters', () => {

    test('argument value is undefined',() => {
        expect(countCharacters()).toEqual('inputted incorrect data');
    });

    test('argument value is null',() => {
        expect(countCharacters(0)).toEqual('inputted incorrect data');
    });

    test('argument value is not a string',() => {
        expect(countCharacters(125)).toEqual('inputted incorrect data');
    });

    test('the string contains special characters',() => {
        expect(countCharacters('a 2ab !d')).toEqual({ '2': 1, a: 2, b: 1, d: 1 });
    });

    test('character string',() => {
        expect(countCharacters('aabcddeffge')).toEqual({ a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1 });
    });
})