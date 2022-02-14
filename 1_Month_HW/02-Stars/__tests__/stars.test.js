const { filledSquare } = require('../src/stars');
const { rightTriangleBottomLeft } = require('../src/stars');
const { triangleTop } = require('../src/stars');
const { rightTriangleTopRight } = require('../src/stars');
const { triangleBottom } = require('../src/stars');
const { iks } = require('../src/stars');
const { hollowSquare } = require('../src/stars');
const { rightTriangleBottomRight } = require('../src/stars');
const { rightTriangleTopLeft } = require('../src/stars');

describe('filledSquare', () => {

    test('filled square drawn with stars',() => {
        expect(filledSquare('*')).toBe(
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n' +
            '*  *  *  *  *  *  *  \n');
    });

})

describe('hollowSquare', () => {

    test('square drawn with stars along a contour',() => {
        expect(hollowSquare('*', 7)).toBe(
            '*  *  *  *  *  *  *  \n' +
            '*                 *  \n' +
            '*                 *  \n' +
            '*                 *  \n' +
            '*                 *  \n' +
            '*                 *  \n' +
            '*  *  *  *  *  *  *  \n');
    });

})

describe('rightTriangleTopLeft', () => {

    test('rightTriangleTopLeft',() => {
        expect(rightTriangleTopLeft('*', 7)).toBe(
            '*  *  *  *  *  *  *  \n' +
            '*              *     \n' +
            '*           *        \n' +
            '*        *           \n' +
            '*     *              \n' +
            '*  *                 \n' +
            '*                    \n');
    });

})

describe('rightTriangleBottomLeft', () => {

    test('rightTriangleBottomLeft',() => {
        expect(rightTriangleBottomLeft('*', 7)).toBe(
            '*  \n' +
            '*  *  \n' +
            '*     *  \n' +
            '*        *  \n' +
            '*           *  \n' +
            '*              *  \n' +
            '*  *  *  *  *  *  *  \n');

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

})

describe('rightTriangleBottomRight', () => {

    test('rightTriangleBottomRight',() => {
        expect(rightTriangleBottomRight('*', 7)).toBe(
            '                  *  \n' +
            '               *  *  \n' +
            '            *     *  \n' +
            '         *        *  \n' +
            '      *           *  \n' +
            '   *              *  \n' +
            '*  *  *  *  *  *  *  \n');
    });

})

describe('rightTriangleTopRight', () => {

    test('rightTriangleTopRight',() => {
        expect(rightTriangleTopRight('*', 7)).toBe(
            '*  *  *  *  *  *  *  \n' +
            '   *              *  \n' +
            '      *           *  \n' +
            '         *        *  \n' +
            '            *     *  \n' +
            '               *  *  \n' +
            '                  *  \n');
    });

})

describe('iks', () => {

    test('',() => {
        expect(iks('*', 7)).toBe(
            '*                 *  \n' +
            '   *           *     \n' +
            '      *     *        \n' +
            '         *           \n' +
            '      *     *        \n' +
            '   *           *     \n' +
            '*                 *  \n');
    });

})

describe('triangleTop', () => {

    test('triangleTop',() => {
        expect(triangleTop('*', 7)).toBe(
            '*  *  *  *  *  *  *  \n' +
            '   *           *     \n' +
            '      *     *        \n' +
            '         *           \n' +
            '                     \n' +
            '                     \n' +
            '                     \n');
    });

})

describe('triangleBottom', () => {

    test('',() => {
        expect(triangleBottom('*', 7)).toBe(
            '                     \n' +
            '                     \n' +
            '                     \n' +
            '         *           \n' +
            '      *     *        \n' +
            '   *           *     \n' +
            '*  *  *  *  *  *  *  \n');
    });

})