/**
 * 冒泡排序
 * @param {*} array 
 */
function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let max = array[i];
                array[i] = array[j];
                array[j] = max;
            }
        }
    }
    return array;
}

/**
 * 快速排序
 * @param {*} array 
 */
function QuickSort(array) {
    if (array.length === 1 || array.length === 0) {
        return array;
    }
    let mark = array[0];
    let leftArr = [],
        middleArr = [],
        rightArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < mark) {
            leftArr.push(array[i]);
        }
        if (array[i] === mark) {
            middleArr.push(array[i]);
        }
        if (array[i] > mark) {
            rightArr.push(array[i]);
        }
    }

    return [].concat(QuickSort(leftArr), middleArr, QuickSort(rightArr));
}

module.exports = {
    "bubble": BubbleSort,
    "quick": QuickSort
}