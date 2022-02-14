import { BSTree } from '../ts/BSTree';

describe('tests for BTS', () => {
    let testTree;
    beforeEach(() => {
        testTree = new BSTree();
    })

    describe('init', () => {
        test('initialize array', () => {
            testTree.init([9, 8, 2, 6, 1]);
            expect(testTree.toArray()).toStrictEqual([1, 2, 6, 8, 9]);
        })
    })
    describe('clear', () => {
        test('clear array', () => {
            testTree.init([9, 8, 2, 6, 1]);
            testTree.clear();
            expect(testTree.toArray()).toStrictEqual([]);
        })
    })
    describe('height', () => {
        test('height size', () => {
            expect(testTree.height()).toBe(0)
        })
        test('height size', () => {
            testTree.init([9, 8, 2, 6, 1]);
            expect(testTree.height()).toBe(4);
        })
    })
    describe('insert', () => {
        test('insert array', () => {
            testTree.init([9, 8, 2, 6, 1]);
            testTree.insert(3);
            expect(testTree.toArray()).toStrictEqual([1, 2, 3, 6, 8, 9]);
        })
    })

    describe('maxNode', () => {
        test('maxNode', () => {
            testTree.init([9, 8, 2, 6, 1]);
            expect(testTree.maxNode()).toBe(9);
        })
    })
    describe('minNode', () => {
        test('minNode', () => {
            testTree.init([9, 8, 2, 6, 1]);
            expect(testTree.minNode()).toBe(1);
        })

    })
    describe('nodes', () => {
        test('nodes', () => {
            testTree.init([9, 8, 2, 6, 1]);
            expect(testTree.nodes()).toBe(5);
        })
    })
    describe('print', () => {
        test('print', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.print({node: 'test'}, (node)=> {return node})).toBeUndefined();
            expect(testTree.toArray()).toStrictEqual([2,3,5,6,9,12]);
        })
        test('print 1', () => {
            testTree.init([1, 2, 3]);
            function detour(current) {
                if (current) {
                    detour(current.left)
                    detour(current.right)
                }
            }
            const node = {"left": null, "right": 1, "value": 2};
            expect(testTree.print(node, () => detour(node))).toBeUndefined();
        })
    })
    describe('remove', () => {
        test('remove null', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(null)).toBeUndefined();
        })
        test('remove 2not in Node', () => {
            testTree.init([]);
            expect(testTree.remove(2)).toBe(null);
        })
        test('remove', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(12)).toBe(5);
        })
        test('remove', () => {
            testTree.init([5]);
            expect(testTree.remove(1)).toBe(5);
        })
        test('remove [2,3,4] current.left == null', () => {
            testTree.init([2,3,4]);
            expect(testTree.remove(3)).toBe(2);
        })
        test('should remove [2,3,4] current.left == null', () => {
            testTree.init([2,3,4]);
            expect(testTree.remove(2)).toStrictEqual(3);
        })
        test('remove, current.left == null', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(9)).toBe(5);
        })
        test('remove', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(5)).toBe(5);
        })
    })
    describe('reverse', () => {
        test('reverse left', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            testTree.reverse();
            expect(testTree.toArray()).toStrictEqual([12,9, 6,5,3,2]);
        })
        test('reverse right', () => {
            testTree.init([5, 2]);
            testTree.reverse();
            expect(testTree.toArray()).toStrictEqual([5,2]);
        })
    })
    describe('search', () => {
        test('search right', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.search(12)).toBe(12)
        })
        test('search left', () => {
            testTree.init([5, 2,4,6]);
            expect(testTree.search(2)).toBe(2);
        })
    })
    describe('size', () => {
        test('size right', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.size(12)).toBe(6)
        })
    })
    describe('width', () => {
        test('width', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.width()).toBe(3)
        })
    })
})