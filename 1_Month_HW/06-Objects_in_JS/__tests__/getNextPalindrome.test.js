const { getNextPalindrome } = require('../src/getNextPalindrome');

describe('getNextPalindrome', () => {

    test('argument is not a number',() => {
        expect(getNextPalindrome('7')).toBe('inputted not a number');
    });

    test('number less than zero',() => {
        expect(getNextPalindrome(-125)).toBe('negative number is not palindrome');
    });

    test('not an integer entered',() => {
        expect(getNextPalindrome(5.5)).toBe('inputted incorrect data');
    });

    test('number less than 10',() => {
        expect(getNextPalindrome(7)).toBe(11);
    });

    test('the function finds the next palindrome',() => {
        expect(getNextPalindrome(12)).toBe(22);
    });

    test('the function finds the next palindrome',() => {
        expect(getNextPalindrome(99)).toBe(101);
    });

    test('the function finds the next palindrome',() => {
        expect(getNextPalindrome(999)).toBe(1001);
    });
})