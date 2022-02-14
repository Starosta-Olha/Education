import { IList } from './types'

class Node {
    value: number;
    next: Node;

    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next || null
    }
}

export class LList implements IList {
    private root: Node | null;
    private tail: Node | null;
    private size: number;

    constructor()
    constructor(input?) {
        if (input && Array.isArray(input)) {
            for (let i = 0; i < input.length; i++) {
                this.add(input[i])
            }
        } else if (input && typeof input === 'number') {
            for (let i = 0; i < input; i++) {
                this.add(0)
            }
        } else if (!input) {
            this.root = null;
            this.tail = null;
            this.size = 0;
        }
    }

    add(item): void {
        const node = new Node(item)

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.root) {
            this.root = node;
        }

        this.tail = node;
        this.size++
    }

    clear(): void {
        this.root = null;
        this.tail = null;
        this.size = 0;
    }

    contains(item): boolean {
        return false;
    }

    get(index): number {
        if (this.root === null) {
            return;
        }
        let node = this.root;
        let idx = 0;
        while (node) {
            if (idx === index) {
                return node.value;
            }
            node = node.next;
            index++
        }
    }

    getSize(): number {
        let current = this.root;
        let count = 0;

        while(current) {
            count++
            current = current.next
        }
        return count;
    }

    halfRevers(): void {
        let arr = this.toArray()

        if (arr.length < 1) {
            return
        }

        const half = Number((arr.length / 2).toFixed(0));
        let res = []
        for (let i = half - 1; i < this.size; i++) {
            res[res.length] = arr[i]
        }
        for (let i = 0; i < half - 1; i++) {
            res[res.length] = arr[i]
        }
        this.clear()

        for (let i = 0; i < res.length; i++) {
            this.add(res[i])
        }
    }

    maxIndex(): number {
        let max = this.root.value;
        let current = this.root;
        let counter = 0;
        let maxIndex = 0;

        while (current) {
            if (max < current.value) {
                max = current.value;
                maxIndex = counter;
            }
            counter++;
            current = current.next;
        }
        return maxIndex;
    }

    maxValue(): number {
        let max = this.root.value;
        let current = this.root;

        while (current) {
            if (max < current.value) {
                max = current.value;
            }
            current = current.next;
        }

        return max;
    }

    minIndex(): number {
        let min = this.root.value;
        let current = this.root;
        let counter = 0;
        let minIndex = 0;

        while (current) {
            if (min > current.value) {
                min = current.value;
                minIndex = counter;
            }
            counter++;
            current = current.next;
        }
        return minIndex;
    }

    minValue(): number {
        let min = this.root.value;
        let current = this.root;

        while (current) {
            if (min > current.value) {
                min = current.value;
            }
            current = current.next;
        }

        return min;
    }

    print(): void {
        let current = this.root;

        for (let i = 0; i < this.size; i++){
            console.log(current.value);
            current = current.next;
        }
    }

    remove(item): number {
        if (!this.root) {
            return;
        }
        while (this.root && this.root.value === item) {
            this.root = this.root.next
        }

        let current = this.root;
        while (current.next) {
            if (current.next.value === item){
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if(this.tail.value === item){
            this.tail = current;
        }
    }

    removeAll(items: number[]): void {
        let current = this.root;
        let prev = null;

        while(current) {

            if (items.includes(current.value)) {
                if (current.next !== null) {
                    current.value = current.next.value;
                    current.next = current.next.next
                } else {
                    if (prev === null) {
                        this.root = null;
                        this.tail = null;
                        current = null;
                    }

                    if (prev !== null) {
                        prev.next = null
                        current = prev
                    }
                }
            } else {
                prev = current
                current = current.next
            }
        }
        this.size = this.getSize()

        if (this.size === 1) {
            this.tail = null;
        }

    }

    retainAll(items: number[]): void {
        let current = this.root;
        let prev = null;

        while(current) {

            if (!items.includes(current.value)) {
                if (current.next !== null) {
                    current.value = current.next.value;
                    current.next = current.next.next
                } else {
                    if (prev === null) {
                        this.root = null;
                        this.tail = null;
                        current = null;
                    }

                    if (prev !== null) {
                        prev.next = null
                        current = prev
                    }
                }
            } else {
                prev = current
                current = current.next
            }
        }
        this.size = this.getSize()

        if (this.size === 1) {
            this.tail = null;
        }
    }

    revers(): void {
        let currNode = this.root;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.root;
        this.root = prevNode;
    }

    set(item, index): void {
        if (this.root === null) {
            return;
        }
        let node = this.root;
        let idx = 0;
        while (node) {
            if (idx === index) {
                node.value = item;
            }
            node = node.next;
            index++
        }
    }

    sort(): void {
        let arr: number[] = doSort(this.toArray())
        function doSort (arr): number[] {

            if (arr.length <= 1) {
                return arr
            }

            let pivot = arr[0];
            let left = [];
            let right = [];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left[left.length] = arr[i]
                } else {
                    right[right.length] = arr[i]
                }
            }
            return doSort(left).concat(pivot, doSort(right));
        }
        this.clear()

        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i])
        }

    }

    toArray(): number[] {
        const nodes = [];
        let currentNode = this.root;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    toString(): string {
        let string = '';
        let current = this.root;

        while (current) {
            string = string + '' + current.value;
            current = current.next;
        }

        return string;
    }
}

