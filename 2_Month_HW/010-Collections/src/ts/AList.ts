import { IList } from './types'

export class AList implements IList {
    private array: number[];
    private size: number;

    constructor()
    constructor(input?)
    {
        if (input && Array.isArray(input)) {
                this.array = input;
                this.size = this.array.length;
        } else if (input && typeof input === 'number') {
            for (let i = 0; i < input; i++) {
                this.add(0)
            }
        } else if (!input) {
            this.array = [];
            this.size = 0;
        }
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0
    }

    getSize(): number {
        return this.size;
    }

    add(item): void {
        this.array[this.size] = item
        this.size++
    }

    set(item, index): void {
        if (this.array[index] !== undefined) {
            this.array[index] = item;
        }
    }

    get(index): number {
        return this.array[index];
    }

    remove(item): number {

        for (let i = 0; i < this.size; i++) {

            if (this.array[i] === item) {
                let deleteItem = this.array[i];
                delete this.array[i];
                this.size--;

                return deleteItem;
            }
        }
    }

    toArray(): number[] {
        return this.array;
    }

    toString(): string {
        let string = '';

        for (let i = 0; i < this.size; i++){
            string = string + this.array[i];
        }

        return string;
    }

    contains(item): boolean {

        for (const itemElement of this.array){
            if (item === itemElement) {
                return true
            }
        }

        return false;
    }

    minValue(): number {
        let min = this.array[0];

        for (let i = 0; i < this.size; i++) {

            if (this.array[i] < min) {
                min = this.array[i];
            }

        }

        return min;
    }

    maxValue(): number {
        let max = this.array[0];

        for (let i = 0; i < this.size; i++) {

            if (this.array[i] > max) {
                max = this.array[i];
            }
        }

        return max;
    }

    minIndex(): number {
        let min = this.array[0];
        let minIndex = 0;

        for (let i = 0; i < this.size; i++) {

            if (min > this.array[i]) {
                min = this.array[i];
                minIndex = i;
            }
        }

        return minIndex;
    }

    maxIndex(): number {
        let max = this.array[0];
        let maxIndex = 0;

        for (let i = 0; i < this.size; i++) {

            if (max < this.array[i]) {
                max = this.array[i];
                maxIndex = i;
            }
        }

        return maxIndex;
    }

    revers(): void {
        let newArr = [];
        let index;

        for (let i = this.size; i > 0; i--) {
            index = this.size - i;
            newArr[i] = this.array[index];
        }
    }

    halfRevers(): void {
        let mid;

        if (this.size % 2 !== 0) {
            mid = (this.size - 1) / 2;
        } else {
            mid = this.size / 2;
        }

        let newArr = [];

        for (let i = this.size - 1; i >= mid; i--) {
            newArr.unshift(this.array[i]);
        }

        if (this.size % 2 !== 0) {
            newArr.push(this.array[mid]);
            newArr.shift();
        }

        for (let j = 0; j <= mid - 1; j++) {
            newArr.push(this.array[j]);
        }
    }

    retainAll(items: number[]): void {
        let newArray = []

        for (let i = 0; i < this.size; i++) {
            let isEqual = false;

            for (let m = 0; m < items.length; m++) {

                if (this.array[i] === items[m]) {
                    isEqual = true;
                }
            }
            if (isEqual === true) {
                newArray[newArray.length] = this.array[i]
            }
        }
        this.array = newArray
        this.size = this.array.length
    }

    removeAll(items: number[]): void {
        let newArray = []
        for (let i = 0; i < this.size; i++) {
            let isEqual = false;

            for (let m = 0; m < items.length; m++) {

                if (this.array[i] === items[m]) {
                    isEqual = true;
                }
            }
            if (isEqual === false) {
                newArray[newArray.length] = this.array[i]
            }
        }
        this.array = newArray
        this.size = this.array.length
    }

    sort(): void {
        let arr: number[] = getQuickSort(this.array)

        function getQuickSort (arr): number[] {

            if (arr.length === 0 || arr.length < 2) {

                return arr;
            }

            let less = [];
            let greater = [];
            let pivot = arr[0];

            for (let i = 1; i < arr.length; i++) {

                if (arr[i] < pivot) {
                    less[less.length] = arr[i];
                } else {
                    greater[greater.length] = arr[i];
                }
            }

            return getQuickSort(less).concat(pivot, getQuickSort(greater));
        }
        this.array = arr
    }

    print(): void {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i])
        }
    }
}



