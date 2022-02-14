//Напишите функцию кеш

function complexFunction(arg1, arg2) {

    return arg1 + arg2;
}

function cache(complexFunction) {
    let cache = {};

    return function(arg1, arg2) {
        let key = complexFunction.call(this, arg1, arg2);

        if (!(key in cache)) {
           cache[key] = complexFunction.call(this, arg1, arg2);

            return `To the cache: ${cache[key]}`;
        }

        return `From cache: ${cache[key]}`;

    }
}

let cachedFunc = cache(complexFunction);
// console.log(cachedFunc('foo', 'bar'));
// console.log(cachedFunc('foo', 'bar'));
// console.log(cachedFunc('foo', 'baz'));
// console.log(cachedFunc('foo', 'bar'));
// console.log(cachedFunc('foo', 'bar'));
// console.log(cachedFunc('foo', 'bar'));

module.exports = { cachedFunc }
