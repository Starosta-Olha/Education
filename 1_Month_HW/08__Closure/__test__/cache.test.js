const { cachedFunc } = require('../src/cache');

describe('cache', () => {

    test('first function call with arguments `foo` and `bar`',() => {
        expect(cachedFunc('foo', 'bar')).toEqual('To the cache: foobar');
    });

    test('second function call with arguments `foo` and `bar`',() => {
        expect(cachedFunc('foo', 'bar')).toEqual('From cache: foobar');
    });

    test('first function call with arguments `foo` and `baz`',() => {
        expect(cachedFunc('foo', 'baz')).toEqual('To the cache: foobaz');
    });

    test('first function call with arguments `foo` and `baz`',() => {
        expect(cachedFunc('foo', 'baz')).toEqual('From cache: foobaz');
    });
})