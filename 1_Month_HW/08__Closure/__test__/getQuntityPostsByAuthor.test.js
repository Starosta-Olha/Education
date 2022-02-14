const { getQuntityPostsByAuthor } = require('../src/getQuntityPostsByAuthor');

describe('getQuntityPostsByAuthor', () => {

    test('first argument type is not array',() => {
        expect(getQuntityPostsByAuthor(125, 'ghgj')).toEqual('Invalid input data');
    });

    test('second argument type is not string',() => {
        expect(getQuntityPostsByAuthor([], 125)).toEqual('Invalid input data');
    });

    test('array is empty',() => {
        expect(getQuntityPostsByAuthor([], 'Rimus')).toEqual('posts - 0, comments - 0');
    });

    test('',() => {
        expect(getQuntityPostsByAuthor([
            {
                id: 1,
                post: 'some post1',
                title: 'title 1',
                author: 'Uncle',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    }]
            },
            {
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Uncle',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }]
            },
            {
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            {
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
            }
        ], 'Rimus')).toEqual('posts - 1, comments - 3');
    });

})