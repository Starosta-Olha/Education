const { tickets } = require('../src/tickets');

describe('tickets', () => {

    test('argument type is not array',() => {
        expect(tickets()).toEqual('Invalid input data');
    });

    test('argument array is empty',() => {
        expect(tickets([])).toEqual('no people in line');
    });

    test('array element is NaN',() => {
        expect(tickets (['ghgj'])).toEqual('Invalid input data');
    });

    test('elements array is not 25 or 50 or 100 ',() => {
        expect(tickets ([15, 50])).toEqual('Invalid input data');
    });

    test('first people in line has not 25 dollars ',() => {
        expect(tickets ([50, 50])).toEqual('no, Vasya will not have enough money to give change to 50 dollars');
    });

    test('Vasya can sell a ticket to everyone in line',() => {
        expect(tickets ([25, 50, 25, 100])).toEqual('Yes');
    });

    test('Vasya will not have enough money to give change to 50 dollars',() => {
        expect(tickets ([25, 50, 50, 100])).toEqual('no, Vasya will not have enough money to give change to 50 dollars');
    });


    test('Vasya will not have enough money to give change to 100 dollars',() => {
        expect(tickets ([25, 50, 100])).toEqual('no, Vasya will not have enough money to give change to 100 dollars');
    });

    test('Vasya will not have enough money to give change to 100 dollars',() => {
        expect(tickets ([25, 100])).toEqual('no, Vasya will not have enough money to give change to 100 dollars');
    });

})