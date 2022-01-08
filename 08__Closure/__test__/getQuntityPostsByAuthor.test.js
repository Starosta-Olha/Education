const { getQuntityPostsByAuthor } = require('../src/getQuntityPostsByAuthor');

describe('getQuntityPostsByAuthor', () => {

    test('first argument type is not array',() => {
        expect(getQuntityPostsByAuthor(125, 'ghgj')).toEqual('Invalid input data');
    });

    test('second argument type is not string',() => {
        expect(getQuntityPostsByAuthor([], 125)).toEqual('Invalid input data');
    });

    // test('',() => {
    //     expect(getQuntityPostsByAuthor()).toBe('');
    // });
    //
    // test('',() => {
    //     expect(getQuntityPostsByAuthor()).toBe('');
    // });
    //
    // test('',() => {
    //     expect(getSum ()).toBe('');
    // });

})