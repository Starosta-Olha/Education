const assert = require('assert');
const path = require('path');
const operators = require(path.join(__dirname, 'operators'));
const cycles = require(path.join(__dirname, 'cycles'));
const arrays = require(path.join(__dirname, 'arrays'));
const functions = require(path.join(__dirname, 'functions'));

describe('operators test', function () {

    it('If a is even count a * b, otherwise a + b', function () {

        assert.equal(operators.getResult(73, 2), 75);
        assert.equal(operators.getResult(10, 2), 20);

    });

    it('Determine which quarter the point with coordinates (x, y) belongs to', function () {

        assert.equal(operators.coordinatePlane(3, 2), 'I');
        assert.equal(operators.coordinatePlane(-3, 2), 'II');
        assert.equal(operators.coordinatePlane(-3, -2), 'III');
        assert.equal(operators.coordinatePlane(3, -2), 'IV');

    });

    it('Find the sums of only positives of three numbers', function () {

        assert.equal(operators.sumPositiveNum(-3, -1, -2), 'Все числа отрицательные');
        assert.equal(operators.sumPositiveNum(3, 1, 2), 6);
        assert.equal(operators.sumPositiveNum(-3, 1, 2), 3);
        assert.equal(operators.sumPositiveNum(-3, -1, 2), 2);
        assert.equal(operators.sumPositiveNum(-3, 1, -2), 1);
        assert.equal(operators.sumPositiveNum(3, -1, -2), 3);
        assert.equal(operators.sumPositiveNum(3, 1, -2), 4);
        assert.equal(operators.sumPositiveNum(3, -1, 2), 5);

    });

    it('if max(a * b * c) then ((a * b * c) + 3), if max (a + b + c) then ((a + b + c) + 3))', function () {

        assert.equal(operators.getResultExpression(1, 3, 3), 12);
        assert.equal(operators.getResultExpression(1, 1, 3), 8);
    });

    it('determining the students assessment by his rating', function () {

        assert.equal(operators.getGradeStudent(10), 'F');
        assert.equal(operators.getGradeStudent(30), 'E');
        assert.equal(operators.getGradeStudent(59), 'D');
        assert.equal(operators.getGradeStudent(72), 'C');
        assert.equal(operators.getGradeStudent(76), 'B');
        assert.equal(operators.getGradeStudent(100), 'A');

    });

});

describe('cycles test', function () {

    it('Find the sum of even numbers and their number in the range from 1 to 99', function () {

        assert.deepEqual(cycles.getSum_AmountEvenNum(1, 99), [2450, 49]);

    });

    it('check number is prime or not', function () {

        assert.             equal(cycles.isPrimeNumber(0), false);
        assert.equal(cycles.isPrimeNumber(2), true);
        assert.equal(cycles.isPrimeNumber(10), false);

    });

    it('square root estimation by последовательный подбор', function () {

        assert.equal((cycles.calcSearchSqrt(0)), 0);
        assert.equal((cycles.calcSearchSqrt(1)), 1);
        assert.equal((cycles.calcSearchSqrt(9)), 3);
        assert.equal(cycles.calcSearchSqrt(145), 12);

    });

    it('calculating the square root by the binary search method', function () {

        assert.equal((cycles.binarySearchSqrt(0)), 0);
        assert.equal((cycles.binarySearchSqrt(1)), 1);
        assert.equal(cycles.binarySearchSqrt(6), 2);
        assert.equal(cycles.binarySearchSqrt(145), 12);

    });

    it('calculating the factorial', function () {

        assert.equal(cycles.calcFactorial(5), 120);

    });

    it('Calculate the sum of digits of a given number', function () {

        assert.equal(cycles.calcSumOfDigits(1245), 12)

    });

    it('display a mirror image of a number like 123 will get 321', function () {

        assert.equal(cycles.getMirrorNumber(32654), 45623);

    });

});

describe('arrays test', function () {

    it('find the min array element', function () {

        assert.equal(arrays.getMin([0, 2, -2, 5, -7, -15]), -15);

    });

    it('find the max array element', function () {

        assert.deepEqual(arrays.getMax([0, 2, -2, 5, -7, -15]), 5);

    });

    it('find the index of the min array element', function () {

        assert.deepEqual(arrays.getIndexMin([0, 2, -2, -7, 2, -15, -6, -25]), 7);

    });

    it('find the index of the max array element', function () {

        assert.deepEqual(arrays.getIndexMax([0, 2, -2, -7, 2, -15, -6, -25]), 1);

    });

    it('calculate sum of odd array elements', function () {

        assert.deepEqual(arrays.calctSumOddElement([1, 2, 25, -2, 50, 7, 10, 1, 8, 25]), 33);

    });

    it('Reverse an array', function () {

        assert.deepEqual(arrays.getReverse([25, -2, 50, 7, 10, 1, 8, 25]), [25, 8, 1, 10, 7, 50, -2, 25]);

    });

    it('calculate the amount odd array elements', function () {

        assert.deepEqual(arrays.calcAmountOddElement([25, -2, 50, 7, 10, 1, 8, 25]), 4);

    });

    it('swap helvs of array', function () {

        assert.deepEqual(arrays.swapHalvesArr([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2])
        assert.deepEqual(arrays.swapHalvesArr([1, 2, 4, 5]), [4, 5, 1, 2])
    })

    it('get sort array by bubble method', function () {

        assert.deepEqual(arrays.getBubbleSort([25, -2, 50, 7, 10, 1, 8, 25]), [-2, 1, 7, 8, 10, 25, 25, 50]);

    });

    it('get sort array by select method', function () {

        assert.deepEqual(arrays.getSelectSort([25, -2, 50, 7, 10, 1, 8, 25]), [-2, 1, 7, 8, 10, 25, 25, 50]);

    });

    it('get sort array by insert method', function () {

        assert.deepEqual(arrays.getInsertSort([25, -2, 50, 7, 10, 1, 8, 25]), [-2, 1, 7, 8, 10, 25, 25, 50]);

    });

    it('get sort array by quick sort method', function () {

        assert.deepEqual(arrays.getQuickSort([25, -2, 50, 7, 10, 1, 8, 25]), [-2, 1, 7, 8, 10, 25, 25, 50]);

    });

    it('get sort array by quick sort method', function () {

        assert.deepEqual(arrays.quickSort([25, -2, 50, 7, 10, 1, 8, 25]), [-2, 1, 7, 8, 10, 25, 25, 50]);

    });
});

describe('functions test', function () {

    it('get string name of day of week by day number', function () {

        assert.equal(functions.getWeekDay(1), 'Monday');
        assert.equal(functions.getWeekDay(2), 'Tuesday');
        assert.equal(functions.getWeekDay(3), 'Wednesday');
        assert.equal(functions.getWeekDay(4), 'Thursday');
        assert.equal(functions.getWeekDay(5), 'Friday');
        assert.equal(functions.getWeekDay(6), 'Saturday');
        assert.equal(functions.getWeekDay(7), 'Sunday');

    });

    it('calculate distance between two coordinates', function () {

        assert.equal(functions.calcDistanceCoord(6, 8, 2, -1), 9.85);
    });

    it('Enter the number (0-999), return the numbers in words.', function () {

        assert.equal(functions.numberToWords(), 'Введите число!');
        assert.equal(functions.numberToWords(8), ' восемь');
        assert.equal(functions.numberToWords(10), ' десять');
        assert.equal(functions.numberToWords(12), ' двенадцать');
        assert.equal(functions.numberToWords(36), ' тридцать шесть');
        assert.equal(functions.numberToWords(50), ' пятьдесят');
        assert.equal(functions.numberToWords(169), ' сто шестьдесят девять');
        assert.equal(functions.numberToWords(950), ' девятьсот пятьдесят');

    });

    it('Enter the numbers in words and return the number (0-999)', function () {

        assert.equal(functions.getNumberString('десять'), 10);
        assert.equal(functions.getNumberString('два'), 2);
        assert.equal(functions.getNumberString('двадцать пять'), 25);
        assert.equal(functions.getNumberString('сто пятьдесят восемь'), 158);
        assert.equal(functions.getNumberString('триста'), 300);

    });

});