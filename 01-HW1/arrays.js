//Одномерные массивы

//1.	Найти минимальный элемент массива

function getMin(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }

    }

    return min;
}

console.log(getMin([0, 2, -2, 5, -7, -15]));


//2.	Найти максимальный элемент массива

function getMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    return max;
}

console.log(getMax([0, 2, -2, 5, -7, -15]));


//3.	Найти индекс минимального элемента массива

function getIndexMin(arr) {
    let min = arr[0];
    let indexMin = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
            indexMin = i;
        }

    }

    return indexMin;
}

console.log(
    getIndexMin([0, 2, -2, -7, 2, -15, -6, -25])
);


//4.	Найти индекс максимального элемента массива

function getIndexMax(arr) {
    let max = arr[0];
    let indexMax = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
            indexMax = i;
        }
    }

    return indexMax;
}

console.log(getIndexMax([0, 2, 25, -2, 50, 7, 50]));


//5.	Посчитать сумму элементов массива с нечетными индексами

function calctSumOddElement(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            sum = sum + arr[i];
        }

    }

    return sum;
}

console.log(calctSumOddElement([1, 2, 25, -2, 50, 7, 10, 1, 8, 25]));


//6.	Сделать реверс массива (массив в обратном направлении)

function getReverse(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(getReverse([0, 2, 25, -2, 50, 7, 10, 1, 8, 25]));


//7.	Посчитать количество нечетных элементов массива

function calcAmountOddElement(arr) {
    let amount = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            amount = amount + 1;
        }

    }

    return amount;
}

console.log(calcAmountOddElement([3, 2, 25, -2, 51, 7, 10, 1, 8, 25]));


//8.	Поменять местами первую и вторую половину массива, например, для массива  1 2 3 4, результат 3 4 1 2

function swapHalvesArr(arr) {
    let mid;

    if (arr.length % 2 !== 0) {
        mid = (arr.length - 1) / 2;
    } else {
        mid = arr.length / 2;
    }

    let newArr = [];

    for (let i = arr.length - 1; i >= mid; i--) {
        newArr.unshift(arr[i]);

    }

    if (arr.length % 2 !== 0) {
        newArr.push(arr[mid]);
        newArr.shift();
    }

    for (let j = 0; j <= mid - 1; j++) {
        newArr.push(arr[j]);
    }

    return newArr;
}

console.log(swapHalvesArr([3, 2, 25, -2, 51, 7, 10, 4, 1, 8, 25]));


//9.	Отсортировать массив

//  пузырьком (Bubble)

function getBubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;
}

console.log(getBubbleSort([3, 2, 25, -2, 51, 7, 10, 1, 8, 25]));


//  выбором (Select)

function getSelectSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i; j < arr.length; j++) {

            if (arr[j] < arr[min]) {
                min = j;
            }

        }

        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

    }

    return arr;
}

console.log(getSelectSort([0, -3, 7, 0, -1, 10]));


//  вставками (Insert)

function getInsertSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
}

console.log(getInsertSort([3, 2, 25, -2, 51, 7, 10, 1, 8, 25]));


//Quick с опорным первым элементом массива

function getQuickSort(arr) {

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

console.log(getQuickSort([3, 2, 25, -1, 4, 7, 4, 10, 1, 8, 25, 306]));

// Быстрая сортировка с опорным элементом, расположенным по середине массива

let arr = [3, 2, 25, -1, 4, 7, 4, 10, 1, 8, 25, 306];

function swap(arr, leftIndex, rightIndex) {
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right) {

    let pivot = arr[Math.floor((right + left) / 2)];

    while (left <= right) {

        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(arr, left, right) {
    let index;

    if (arr.length > 1) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }

    }

    return arr;
}

let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

// Merge - сортировка слиянием

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 25, -1, 4, 7, 4, 10, 1, 8, 25, 306]));

// Shell - сортировка Шелла

function shellSort(arr) {
    const l = arr.length;
    let h = Math.floor(l / 2);

    while (h >= 1) {

        for (let i = h; i < l; i++) {
            const current = arr[i];
            let j = i;

            while (j > 0 && arr[j - h] > current) {
                arr[j] = arr[j - h];
                j = j - h;
            }

            arr[j] = current;
        }

        h = Math.floor(h / 2);
    }

    return arr;
}

console.log(shellSort([3, 2, 25, -1, 4, 7, 4, 10, 1, 8, 25, 306]));

// Heap - пирамидальная сортировка (сортировка кучей)

function heapify(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (arr[left] > arr[largest] && left < length) {
        largest = left;
    }

    if (arr[right] > arr[largest] && right < length) {
        largest = right;
    }

    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, length, largest);
    }

    return arr;
}

function heapSort(arr) {
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        heapify(arr, length, i);
        i--;
    }

    while (k >= 0) {
        let temp = arr[0]
        arr[0] = arr[k];
        arr[k] = temp;
        heapify(arr, k, 0);
        k--;
    }

    return arr;
}

console.log(heapSort([3, 2, 25, -1, 4, 7, 4, 10, 1, 8, 25, 306]));


exports.getMin = getMin;
exports.getMax = getMax;
exports.getIndexMin = getIndexMin;
exports.getIndexMax = getIndexMax;
exports.calctSumOddElement = calctSumOddElement;
exports.getReverse = getReverse;
exports.calcAmountOddElement = calcAmountOddElement;
exports.swapHalvesArr = swapHalvesArr;
exports.getBubbleSort = getBubbleSort;
exports.getSelectSort = getSelectSort;
exports.getInsertSort = getInsertSort;
exports.getQuickSort = getQuickSort;
exports.quickSort = quickSort;
exports.mergeSort = mergeSort;
exports.shellSort = shellSort;
exports.heapSort = heapSort;






