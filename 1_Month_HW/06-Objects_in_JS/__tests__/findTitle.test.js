const { findTitle } = require('../src/findTitle');

describe('findTitle ', () => {

    test('argument `arr` is not an array',() => {
        expect(findTitle('title')).toEqual('inputted incorrect data');
    });

    test('argument `str` is not a string',() => {
        expect(findTitle( [{title: 'Some title1'}, {title: 'I like JS'}], 125)).toEqual('inputted incorrect data');
    });

    test('str ​​is not specified or equal to zero',() => {
        expect(findTitle([{title: 'Some title1'}], '')).toEqual('value not set');
    });

    test('function filters the array',() => {
        expect(findTitle([{
            title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn’t have key title js'},
            {title: 'Js - is the best!'}], 'best')).toEqual([{title: 'Js - is the best!'}]);
    });

})